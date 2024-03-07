import proto.video_streaming_pb2 as video_streaming_pb2
import proto.video_streaming_pb2_grpc as video_streaming_pb2_grpc
import grpc
from concurrent import futures
import time
import sqlite3

def add_user(request):
    connection = sqlite3.connect('conferences.db')
    cursor = connection.cursor()
    cursor.execute("CREATE TABLE IF NOT EXISTS conf_" + str(request.confId) +  " (id INTEGER PRIMARY KEY,l_image TEXT NOT NULL, time INTEGER)")
    connection.commit()
    info = cursor.execute("SELECT * FROM conf_" + str(request.confId) + " WHERE id=?", (request.userId, )).fetchone()
    if not info: 
        cursor.execute("INSERT INTO conf_" + str(request.confId) + " (id, l_image, time) VALUES (?, ?, ?)", (request.userId, '',0))
    connection.commit()
    connection.close()

def update_picture_data(request):
    connection = sqlite3.connect('conferences.db')
    cursor = connection.cursor()
    info = cursor.execute("SELECT * FROM conf_" + str(request.userInfo.confId) + " WHERE id=?", (request.userInfo.userId, )).fetchone()
    if info:
        cursor.execute("UPDATE conf_" + str(request.userInfo.confId) + " SET l_image = ? WHERE id = ?", (request.videoData.data, request.userInfo.userId))
        connection.commit()
    connection.close()

class VideoServiceServicer(video_streaming_pb2_grpc.VideoServiceServicer):
    def __init__(self):
        pass

    def NewUser(self, request, context):
        #print("Get new user request")
        add_user(request)
        return video_streaming_pb2.EmptyMessage()


    def SendVideoToServer(self, request, context):
        #print("Get video form client request")
        update_picture_data(request)
        return video_streaming_pb2.EmptyMessage()


    def GetVideoFromServer(self, request, context):
        connection = sqlite3.connect("conferences.db")
        cursor = connection.cursor()
        for i in range(10**3):#Вините долбоеба на каме
            ids = cursor.execute("SELECT id FROM conf_" + str(request.confId)).fetchall()
            ids = [str(i[0]) for i in ids]
            l_image = cursor.execute("SELECT l_image FROM conf_" + str(request.confId)).fetchall()
            l_image = [video_streaming_pb2.VideoMessage(data=str(i[0]), n=10, m=10) for i in l_image]
            time.sleep(0.05)
            yield video_streaming_pb2.VideoDataToFrontMessage(videoMessage=l_image, userLogins=ids)
        connection.close()


def serve():
    server = grpc.server(
        thread_pool=futures.ThreadPoolExecutor(max_workers=10)
    )
    video_streaming_pb2_grpc.add_VideoServiceServicer_to_server(VideoServiceServicer(), server)
    server.add_insecure_port("[::]:9090")
    server.start()
    server.wait_for_termination()

serve()
