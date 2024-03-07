from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class EmptyMessage(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class ClientInfoWithLoginMessage(_message.Message):
    __slots__ = ("confId", "userId", "userLogin", "isAdmin")
    CONFID_FIELD_NUMBER: _ClassVar[int]
    USERID_FIELD_NUMBER: _ClassVar[int]
    USERLOGIN_FIELD_NUMBER: _ClassVar[int]
    ISADMIN_FIELD_NUMBER: _ClassVar[int]
    confId: int
    userId: int
    userLogin: str
    isAdmin: bool
    def __init__(self, confId: _Optional[int] = ..., userId: _Optional[int] = ..., userLogin: _Optional[str] = ..., isAdmin: bool = ...) -> None: ...

class VideoMessage(_message.Message):
    __slots__ = ("data", "n", "m")
    DATA_FIELD_NUMBER: _ClassVar[int]
    N_FIELD_NUMBER: _ClassVar[int]
    M_FIELD_NUMBER: _ClassVar[int]
    data: str
    n: int
    m: int
    def __init__(self, data: _Optional[str] = ..., n: _Optional[int] = ..., m: _Optional[int] = ...) -> None: ...

class VideoClusterToServerMessage(_message.Message):
    __slots__ = ("videoData", "userInfo", "timeStamp")
    VIDEODATA_FIELD_NUMBER: _ClassVar[int]
    USERINFO_FIELD_NUMBER: _ClassVar[int]
    TIMESTAMP_FIELD_NUMBER: _ClassVar[int]
    videoData: VideoMessage
    userInfo: ClientInfoWithLoginMessage
    timeStamp: int
    def __init__(self, videoData: _Optional[_Union[VideoMessage, _Mapping]] = ..., userInfo: _Optional[_Union[ClientInfoWithLoginMessage, _Mapping]] = ..., timeStamp: _Optional[int] = ...) -> None: ...

class VideoDataToFrontMessage(_message.Message):
    __slots__ = ("videoMessage", "userLogins")
    VIDEOMESSAGE_FIELD_NUMBER: _ClassVar[int]
    USERLOGINS_FIELD_NUMBER: _ClassVar[int]
    videoMessage: _containers.RepeatedCompositeFieldContainer[VideoMessage]
    userLogins: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, videoMessage: _Optional[_Iterable[_Union[VideoMessage, _Mapping]]] = ..., userLogins: _Optional[_Iterable[str]] = ...) -> None: ...
