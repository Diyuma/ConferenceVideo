module.exports = {
    entry: ['./proto/video_streaming_grpc_web_pb.js', './proto/video_streaming_pb.js'],
    resolve: {
        fallback: {
        "fs": false,
        "tls": false,
        "net": false,
        "path": false,
        "zlib": false,
        "http": false,
        "https": false,
        "stream": false,
        "crypto": false,
        "crypto-browserify": require.resolve('crypto-browserify')
        }
    },
};