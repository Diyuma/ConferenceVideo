/**
 * @fileoverview gRPC-Web generated client stub for video_streaming
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v3.20.3
// source: video_streaming.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.video_streaming = require('./video_streaming_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.video_streaming.VideoServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.video_streaming.VideoServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.video_streaming.ClientInfoWithLoginMessage,
 *   !proto.video_streaming.EmptyMessage>}
 */
const methodDescriptor_VideoService_NewUser = new grpc.web.MethodDescriptor(
  '/video_streaming.VideoService/NewUser',
  grpc.web.MethodType.UNARY,
  proto.video_streaming.ClientInfoWithLoginMessage,
  proto.video_streaming.EmptyMessage,
  /**
   * @param {!proto.video_streaming.ClientInfoWithLoginMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.video_streaming.EmptyMessage.deserializeBinary
);


/**
 * @param {!proto.video_streaming.ClientInfoWithLoginMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.video_streaming.EmptyMessage)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.video_streaming.EmptyMessage>|undefined}
 *     The XHR Node Readable Stream
 */
proto.video_streaming.VideoServiceClient.prototype.newUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/video_streaming.VideoService/NewUser',
      request,
      metadata || {},
      methodDescriptor_VideoService_NewUser,
      callback);
};


/**
 * @param {!proto.video_streaming.ClientInfoWithLoginMessage} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.video_streaming.EmptyMessage>}
 *     Promise that resolves to the response
 */
proto.video_streaming.VideoServicePromiseClient.prototype.newUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/video_streaming.VideoService/NewUser',
      request,
      metadata || {},
      methodDescriptor_VideoService_NewUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.video_streaming.VideoClusterToServerMessage,
 *   !proto.video_streaming.EmptyMessage>}
 */
const methodDescriptor_VideoService_SendVideoToServer = new grpc.web.MethodDescriptor(
  '/video_streaming.VideoService/SendVideoToServer',
  grpc.web.MethodType.UNARY,
  proto.video_streaming.VideoClusterToServerMessage,
  proto.video_streaming.EmptyMessage,
  /**
   * @param {!proto.video_streaming.VideoClusterToServerMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.video_streaming.EmptyMessage.deserializeBinary
);


/**
 * @param {!proto.video_streaming.VideoClusterToServerMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.video_streaming.EmptyMessage)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.video_streaming.EmptyMessage>|undefined}
 *     The XHR Node Readable Stream
 */
proto.video_streaming.VideoServiceClient.prototype.sendVideoToServer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/video_streaming.VideoService/SendVideoToServer',
      request,
      metadata || {},
      methodDescriptor_VideoService_SendVideoToServer,
      callback);
};


/**
 * @param {!proto.video_streaming.VideoClusterToServerMessage} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.video_streaming.EmptyMessage>}
 *     Promise that resolves to the response
 */
proto.video_streaming.VideoServicePromiseClient.prototype.sendVideoToServer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/video_streaming.VideoService/SendVideoToServer',
      request,
      metadata || {},
      methodDescriptor_VideoService_SendVideoToServer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.video_streaming.ClientInfoWithLoginMessage,
 *   !proto.video_streaming.VideoDataToFrontMessage>}
 */
const methodDescriptor_VideoService_GetVideoFromServer = new grpc.web.MethodDescriptor(
  '/video_streaming.VideoService/GetVideoFromServer',
  grpc.web.MethodType.UNARY,
  proto.video_streaming.ClientInfoWithLoginMessage,
  proto.video_streaming.VideoDataToFrontMessage,
  /**
   * @param {!proto.video_streaming.ClientInfoWithLoginMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.video_streaming.VideoDataToFrontMessage.deserializeBinary
);


/**
 * @param {!proto.video_streaming.ClientInfoWithLoginMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.video_streaming.VideoDataToFrontMessage)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.video_streaming.VideoDataToFrontMessage>|undefined}
 *     The XHR Node Readable Stream
 */
proto.video_streaming.VideoServiceClient.prototype.getVideoFromServer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/video_streaming.VideoService/GetVideoFromServer',
      request,
      metadata || {},
      methodDescriptor_VideoService_GetVideoFromServer,
      callback);
};


/**
 * @param {!proto.video_streaming.ClientInfoWithLoginMessage} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.video_streaming.VideoDataToFrontMessage>}
 *     Promise that resolves to the response
 */
proto.video_streaming.VideoServicePromiseClient.prototype.getVideoFromServer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/video_streaming.VideoService/GetVideoFromServer',
      request,
      metadata || {},
      methodDescriptor_VideoService_GetVideoFromServer);
};


module.exports = proto.video_streaming;

