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
