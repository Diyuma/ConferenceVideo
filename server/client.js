const protoLoader = require("@grpc/proto-loader");
const grpc = require("grpc-web");

const { EmptyMessage, ClientInfoWithLoginMessage, VideoClusterToServerMessage, VideoDataToFrontMessage, VideoMessage } = require('./proto/video_streaming_pb.js');
const { VideoServiceClient } = require('./proto/video_streaming_grpc_web_pb.js');

var client = new VideoServiceClient('http://0.0.0.0:8085');

//async !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

async function getVideo() {
    var msg = new ClientInfoWithLoginMessage();
    msg.setConfid(123);
    msg.setUserid(456);
    msg.setUserlogin("Alex");
    msg.setIsadmin(true);

    var stream = client.getVideoFromServer(msg, {"Access-Control-Allow-Origin": "*"});
    stream.on('data', function(response) {
        console.log("GET VIDEO");

        console.log(response.getUserloginsList());
        console.log(response.getVideomessageList()[0].getData());
        console.log(response.getVideomessageList()[0].getN());
        console.log(response.getVideomessageList()[0].getM());
    });
}

async function sendVideo() {
    var msgui = new ClientInfoWithLoginMessage();
    msgui.setConfid(123);
    msgui.setUserid(456);
    msgui.setUserlogin("Alex");
    msgui.setIsadmin(true);

    var msgvid = new VideoMessage();
    const data = new Int8Array(2);
    data[0] = 100;
    data[1] = 100;
    msgvid.setData(data);
    msgvid.setN(57);
    msgvid.setM(99);

    var msg = new VideoClusterToServerMessage();
    msg.setUserinfo(msgui);
    msg.setTimestamp(321);

    client.sendVideoToServer(msg, {"Access-Control-Allow-Origin": "*"}, (error, response) => {
       console.log(error);
       console.log(response);
    });
}

async function NewUser() {
    var msg = new ClientInfoWithLoginMessage();
    msg.setConfid(123);
    msg.setUserid(456);
    msg.setUserlogin("Alex");
    msg.setIsadmin(true);

    client.newUser(msg, {"Access-Control-Allow-Origin": "*"}, (error, response) => {
        console.log(response);
        console.log(error);
    });
}


NewUser();
getVideo();
sendVideo();