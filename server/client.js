// !!!! to test local use http://0.0.0.0:8085

const protoLoader = require("@grpc/proto-loader");
const grpc = require("grpc-web");

const { EmptyMessage, ClientInfoWithLoginMessage, VideoClusterToServerMessage, VideoDataToFrontMessage, VideoMessage } = require('./proto/video_streaming_pb.js');
const { VideoServiceClient } = require('./proto/video_streaming_grpc_web_pb.js');
var width = 240;    // We will scale the photo width to this
var height = 0;     // This will be computed based on the input stream
var interval = 1000;
var canvases = {};
var images = {};
var streaming = false;
var IS_ADMIN = true;
var c_id = 0;
var u_id = 0;
var streaming_vid = false;
var send_video = false;
var client = new VideoServiceClient('https://diyumaconference.ru/'); // !!!! to test local use http://0.0.0.0:8085

var video = document.getElementById('video');
var canvas = document.createElement('canvas');
var photo = document.getElementById('photo');
var startbutton = document.getElementById('startbutton');
//async !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
async function startup() {
    video = document.getElementById('video');
    photo = document.getElementById('photo');
    startbutton = document.getElementById('startbutton');
    await navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((stream) => {
        video.srcObject = stream;
        video.play();
    })
    .catch((err) => {
        console.error(`An error occurred: ${err}`);
    });
    video.addEventListener(
        "canplay",
        (ev) => {
          if (!streaming) {
            height = (video.videoHeight / video.videoWidth) * width;
      
            video.setAttribute("width", width);
            video.setAttribute("height", height);
            canvas.setAttribute("width", width);
            canvas.setAttribute("height", height);
            streaming = true;
          }
        },
        false,
    );
    get_photos();
    clearphoto();
}
async function get_photos(){
    setInterval(sendVideo, interval);
}
async function clearphoto() {
    const context = canvas.getContext("2d");
    context.fillStyle = "#AAA";
    context.fillRect(0, 0, canvas.width, canvas.height);
}
async function takepicture() {
    const context = canvas.getContext("2d");
    if (width && height) {
      canvas.width = width;
      canvas.height = height;
      context.drawImage(video, 0, 0, width, height);
      return canvas.toDataURL("image/jpeg");
    } else {
      clearphoto();
    }
}
async function drawObject(ids, videos){
    for(var i = 0;i < ids.length; i++){
        images[ids[i]] = videos[i].getData()
        //console.log(images[ids[i]])
        if(canvases[ids[i]] == null){
            canvases[ids[i]] = document.createElement('canvas');
            canvases[ids[i]].id = ids[i];
            canvases[ids[i]].width = 320;
            canvases[ids[i]].height = 320;
            document.body.appendChild(canvases[ids[i]]);
        }
        const context = canvases[ids[i]].getContext("2d");
        var image = new Image();
        image.src = images[ids[i]];
        context.drawImage(image, 0, 0);
    }
}
async function getVideo() {
    var msg = new ClientInfoWithLoginMessage();
    msg.setConfid(c_id);
    msg.setUserid(u_id);
    msg.setUserlogin("Alex");
    msg.setIsadmin(IS_ADMIN);
    var videos = [];
    var ids = [];
    // var stream = client.getVideoFromServer(msg, {"Access-Control-Allow-Origin": "*"});
    // stream.on('data', function(response) {
    //     if(response != null){
    //         ids = response.getUserloginsList();
    //         videos = response.getVideomessageList();
    //         drawObject(ids, videos)
    //     }
    //     if(!streaming_vid){
    //         stream.cancel()
    //     }
    // });
    // stream.on('end', function(end) {
    //     getVideo();
    // });
    client.getVideoFromServer(msg, {"Access-Control-Allow-Origin": "*"}, (error, response) => {
        if(response != null) {
            ids = response.getUserloginsList();
            videos = response.getVideomessageList();
            drawObject(ids, videos)
        }
    });

    if(!streaming_vid){
        return;
        //stream.cancel()
    }

    setTimeout(() => getVideo(), interval);
}

async function sendVideo() {
    if(send_video){
        var msgui = new ClientInfoWithLoginMessage();
        msgui.setConfid(c_id);
        msgui.setUserid(u_id);
        msgui.setUserlogin("Alex");
        msgui.setIsadmin(IS_ADMIN);

        var msgvid = new VideoMessage();
        let data = await takepicture();
        msgvid.setData(data);
        msgvid.setN(0);
        msgvid.setM(99);

        let msg = new VideoClusterToServerMessage();
        msg.setVideodata(msgvid);
        msg.setUserinfo(msgui);
        msg.setTimestamp(321);

        client.sendVideoToServer(msg, {"Access-Control-Allow-Origin": "*"}, (error, response) => {
        //console.log(error);
        //console.log(response);
        });
    }
}

async function NewUser() {
    var msg = new ClientInfoWithLoginMessage();
    msg.setConfid(c_id);
    msg.setUserid(u_id);
    msg.setUserlogin("Alex");
    msg.setIsadmin(IS_ADMIN);

    client.newUser(msg, {"Access-Control-Allow-Origin": "*"}, (error, response) => {
        //console.log(response);
        //console.log(error);
    });
}

window.StopVideoGetting = async function StopVideoGetting(){
    streaming_vid = false;
}

window.StartVideoGetting = async function StartVideoGetting(){
    streaming_vid = true;
    getVideo();
}

window.StopVideoSending = async function StopVideoSending(){
    send_video = false;
}

window.StartVideoSending = async function StartVideoSending(){
    send_video = true;
}

window.RunVideo = async function RunVideo(conference_id, user_id, is_admin){
    u_id = user_id;
    c_id = conference_id;
    IS_ADMIN = is_admin;
    NewUser();
    startup();
    getVideo();
    sendVideo();
}