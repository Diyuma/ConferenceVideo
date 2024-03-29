# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

from proto import video_streaming_pb2 as proto_dot_video__streaming__pb2


class VideoServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.NewUser = channel.unary_unary(
                '/video_streaming.VideoService/NewUser',
                request_serializer=proto_dot_video__streaming__pb2.ClientInfoWithLoginMessage.SerializeToString,
                response_deserializer=proto_dot_video__streaming__pb2.EmptyMessage.FromString,
                )
        self.SendVideoToServer = channel.unary_unary(
                '/video_streaming.VideoService/SendVideoToServer',
                request_serializer=proto_dot_video__streaming__pb2.VideoClusterToServerMessage.SerializeToString,
                response_deserializer=proto_dot_video__streaming__pb2.EmptyMessage.FromString,
                )
        self.GetVideoFromServer = channel.unary_unary(
                '/video_streaming.VideoService/GetVideoFromServer',
                request_serializer=proto_dot_video__streaming__pb2.ClientInfoWithLoginMessage.SerializeToString,
                response_deserializer=proto_dot_video__streaming__pb2.VideoDataToFrontMessage.FromString,
                )


class VideoServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def NewUser(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def SendVideoToServer(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def GetVideoFromServer(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_VideoServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'NewUser': grpc.unary_unary_rpc_method_handler(
                    servicer.NewUser,
                    request_deserializer=proto_dot_video__streaming__pb2.ClientInfoWithLoginMessage.FromString,
                    response_serializer=proto_dot_video__streaming__pb2.EmptyMessage.SerializeToString,
            ),
            'SendVideoToServer': grpc.unary_unary_rpc_method_handler(
                    servicer.SendVideoToServer,
                    request_deserializer=proto_dot_video__streaming__pb2.VideoClusterToServerMessage.FromString,
                    response_serializer=proto_dot_video__streaming__pb2.EmptyMessage.SerializeToString,
            ),
            'GetVideoFromServer': grpc.unary_unary_rpc_method_handler(
                    servicer.GetVideoFromServer,
                    request_deserializer=proto_dot_video__streaming__pb2.ClientInfoWithLoginMessage.FromString,
                    response_serializer=proto_dot_video__streaming__pb2.VideoDataToFrontMessage.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'video_streaming.VideoService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class VideoService(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def NewUser(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/video_streaming.VideoService/NewUser',
            proto_dot_video__streaming__pb2.ClientInfoWithLoginMessage.SerializeToString,
            proto_dot_video__streaming__pb2.EmptyMessage.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def SendVideoToServer(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/video_streaming.VideoService/SendVideoToServer',
            proto_dot_video__streaming__pb2.VideoClusterToServerMessage.SerializeToString,
            proto_dot_video__streaming__pb2.EmptyMessage.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def GetVideoFromServer(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/video_streaming.VideoService/GetVideoFromServer',
            proto_dot_video__streaming__pb2.ClientInfoWithLoginMessage.SerializeToString,
            proto_dot_video__streaming__pb2.VideoDataToFrontMessage.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
