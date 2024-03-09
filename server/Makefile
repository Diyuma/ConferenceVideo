buildPythonProto:
	python3 -m grpc_tools.protoc -Iproto=proto --python_out=. --pyi_out=. --grpc_python_out=. ./proto/video_streaming.proto

buildJsProto:
	protoc -I=./proto ./proto/video_streaming.proto --js_out=import_style=commonjs:./proto
	protoc -I=./proto ./proto/video_streaming.proto --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./proto

buildProtos: buildPythonProto buildJsProto

startEvans:
	evans --proto proto/video_streaming.proto --port 9090

startEnvoy:
	envoy -c envoy-override.yaml

buildFront:
	npm install
	npx webpack ./client.js

# тут всё кроме сервера
buildAndRunAllWithoutServer: buildProtos startEnvoy buildFront

# тут сервер
startPython:
	python3 python_test.py

buildPython:
	docker build . --tag dikiray/conferencevideoserver

runPython:
	-docker stop videoServer
	-docker rm videoServer
	docker run --name videoServer -p 9090:9090 -d dikiray/conferencevideoserver

stopPython:
	docker stop videoServer
	docker rm videoServer

# ------- SERVER TARGETS -------
uploadToServer:
	ssh -i ~/.ssh/yconference lehatr@178.154.202.56 rm -rf "~/conference/videoServer/"

	cd ..

	scp -i ~/.ssh/yconference -r videoServer lehatr@178.154.202.56:~/conference
	ssh -i ~/.ssh/yconference lehatr@178.154.202.56 sudo mv "~/conference/server" "~/conference/videoServer"

	ssh -i ~/.ssh/yconference lehatr@178.154.202.56 sudo docker build "~/conference/videoServer" --tag dikiray/conferencevideoserver

runOnServer:
	-ssh -i ~/.ssh/yconference lehatr@178.154.202.56 sudo docker stop videoServer
	-ssh -i ~/.ssh/yconference lehatr@178.154.202.56 sudo docker rm videoServer
	ssh -i ~/.ssh/yconference lehatr@178.154.202.56 sudo docker run --name videoServer --network conf_net --ip 172.18.0.7 -d \
				dikiray/conferencevideoserver