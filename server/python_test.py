import proto.video_streaming_pb2 as video_streaming_pb2
import proto.video_streaming_pb2_grpc as video_streaming_pb2_grpc
import grpc
from concurrent import futures

def print_user_info(request):
    print(request.confId)
    print(request.userId)
    print(request.userLogin)
    print(request.isAdmin)

def print_video_data(request):
    print(request.data)
    print(request.n)
    print(request.m)


class VideoServiceServicer(video_streaming_pb2_grpc.VideoServiceServicer):
    def __init__(self):
        pass

    def NewUser(self, request, context):
        print("Get new user request")
        print_user_info(request)

        return video_streaming_pb2.EmptyMessage()


    def SendVideoToServer(self, request, context):
        print("Get video form client request")
        print_video_data(request.videoData)
        print_user_info(request.userInfo)
        print(request.timeStamp)

        return video_streaming_pb2.EmptyMessage()


    def GetVideoFromServer(self, request, context):
        print("Get request to send to client")
        print_user_info(request)

        for i in range(3):
            yield video_streaming_pb2.VideoDataToFrontMessage(videoMessage=[video_streaming_pb2.VideoMessage(data=bytes(str(i),'UTF-8'), n=10, m=10)], userLogins=["123", "456"])


def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    video_streaming_pb2_grpc.add_VideoServiceServicer_to_server(VideoServiceServicer(), server)
    server.add_insecure_port("[::]:9090")
    server.start()
    server.wait_for_termination()

serve()
