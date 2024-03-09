const webpack = require('webpack')
const path = require('path');
module.exports = {
    plugins: [
        // fix "process is not defined" error:
        new webpack.ProvidePlugin({
          process: 'process/browser',
        }),
      ],
    output: {
      filename: 'main_video.js',
          path: path.resolve(__dirname, 'dist'),
    },
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