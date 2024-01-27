// source: video_streaming.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() { return this || window || global || self || Function('return this')(); }).call(null);

goog.exportSymbol('proto.video_streaming.ClientInfoWithLoginMessage', null, global);
goog.exportSymbol('proto.video_streaming.EmptyMessage', null, global);
goog.exportSymbol('proto.video_streaming.VideoClusterToServerMessage', null, global);
goog.exportSymbol('proto.video_streaming.VideoDataToFrontMessage', null, global);
goog.exportSymbol('proto.video_streaming.VideoMessage', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.video_streaming.EmptyMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.video_streaming.EmptyMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.video_streaming.EmptyMessage.displayName = 'proto.video_streaming.EmptyMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.video_streaming.ClientInfoWithLoginMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.video_streaming.ClientInfoWithLoginMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.video_streaming.ClientInfoWithLoginMessage.displayName = 'proto.video_streaming.ClientInfoWithLoginMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.video_streaming.VideoMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.video_streaming.VideoMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.video_streaming.VideoMessage.displayName = 'proto.video_streaming.VideoMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.video_streaming.VideoClusterToServerMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.video_streaming.VideoClusterToServerMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.video_streaming.VideoClusterToServerMessage.displayName = 'proto.video_streaming.VideoClusterToServerMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.video_streaming.VideoDataToFrontMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.video_streaming.VideoDataToFrontMessage.repeatedFields_, null);
};
goog.inherits(proto.video_streaming.VideoDataToFrontMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.video_streaming.VideoDataToFrontMessage.displayName = 'proto.video_streaming.VideoDataToFrontMessage';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.video_streaming.EmptyMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.video_streaming.EmptyMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.video_streaming.EmptyMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.video_streaming.EmptyMessage.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.video_streaming.EmptyMessage}
 */
proto.video_streaming.EmptyMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.video_streaming.EmptyMessage;
  return proto.video_streaming.EmptyMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.video_streaming.EmptyMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.video_streaming.EmptyMessage}
 */
proto.video_streaming.EmptyMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.video_streaming.EmptyMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.video_streaming.EmptyMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.video_streaming.EmptyMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.video_streaming.EmptyMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.video_streaming.ClientInfoWithLoginMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.video_streaming.ClientInfoWithLoginMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.video_streaming.ClientInfoWithLoginMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.video_streaming.ClientInfoWithLoginMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    confid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    userid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    userlogin: jspb.Message.getFieldWithDefault(msg, 3, ""),
    isadmin: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.video_streaming.ClientInfoWithLoginMessage}
 */
proto.video_streaming.ClientInfoWithLoginMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.video_streaming.ClientInfoWithLoginMessage;
  return proto.video_streaming.ClientInfoWithLoginMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.video_streaming.ClientInfoWithLoginMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.video_streaming.ClientInfoWithLoginMessage}
 */
proto.video_streaming.ClientInfoWithLoginMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setConfid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUserid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserlogin(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsadmin(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.video_streaming.ClientInfoWithLoginMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.video_streaming.ClientInfoWithLoginMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.video_streaming.ClientInfoWithLoginMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.video_streaming.ClientInfoWithLoginMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getUserid();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getUserlogin();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIsadmin();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional uint64 confId = 1;
 * @return {number}
 */
proto.video_streaming.ClientInfoWithLoginMessage.prototype.getConfid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.video_streaming.ClientInfoWithLoginMessage} returns this
 */
proto.video_streaming.ClientInfoWithLoginMessage.prototype.setConfid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 userId = 2;
 * @return {number}
 */
proto.video_streaming.ClientInfoWithLoginMessage.prototype.getUserid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.video_streaming.ClientInfoWithLoginMessage} returns this
 */
proto.video_streaming.ClientInfoWithLoginMessage.prototype.setUserid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string userLogin = 3;
 * @return {string}
 */
proto.video_streaming.ClientInfoWithLoginMessage.prototype.getUserlogin = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.video_streaming.ClientInfoWithLoginMessage} returns this
 */
proto.video_streaming.ClientInfoWithLoginMessage.prototype.setUserlogin = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool isAdmin = 4;
 * @return {boolean}
 */
proto.video_streaming.ClientInfoWithLoginMessage.prototype.getIsadmin = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.video_streaming.ClientInfoWithLoginMessage} returns this
 */
proto.video_streaming.ClientInfoWithLoginMessage.prototype.setIsadmin = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.video_streaming.VideoMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.video_streaming.VideoMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.video_streaming.VideoMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.video_streaming.VideoMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: msg.getData_asB64(),
    n: jspb.Message.getFieldWithDefault(msg, 2, 0),
    m: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.video_streaming.VideoMessage}
 */
proto.video_streaming.VideoMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.video_streaming.VideoMessage;
  return proto.video_streaming.VideoMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.video_streaming.VideoMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.video_streaming.VideoMessage}
 */
proto.video_streaming.VideoMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setN(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setM(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.video_streaming.VideoMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.video_streaming.VideoMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.video_streaming.VideoMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.video_streaming.VideoMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getN();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getM();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional bytes data = 1;
 * @return {string}
 */
proto.video_streaming.VideoMessage.prototype.getData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes data = 1;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.video_streaming.VideoMessage.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes data = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.video_streaming.VideoMessage.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.video_streaming.VideoMessage} returns this
 */
proto.video_streaming.VideoMessage.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional uint32 n = 2;
 * @return {number}
 */
proto.video_streaming.VideoMessage.prototype.getN = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.video_streaming.VideoMessage} returns this
 */
proto.video_streaming.VideoMessage.prototype.setN = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 m = 3;
 * @return {number}
 */
proto.video_streaming.VideoMessage.prototype.getM = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.video_streaming.VideoMessage} returns this
 */
proto.video_streaming.VideoMessage.prototype.setM = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.video_streaming.VideoClusterToServerMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.video_streaming.VideoClusterToServerMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.video_streaming.VideoClusterToServerMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.video_streaming.VideoClusterToServerMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    videodata: (f = msg.getVideodata()) && proto.video_streaming.VideoMessage.toObject(includeInstance, f),
    userinfo: (f = msg.getUserinfo()) && proto.video_streaming.ClientInfoWithLoginMessage.toObject(includeInstance, f),
    timestamp: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.video_streaming.VideoClusterToServerMessage}
 */
proto.video_streaming.VideoClusterToServerMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.video_streaming.VideoClusterToServerMessage;
  return proto.video_streaming.VideoClusterToServerMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.video_streaming.VideoClusterToServerMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.video_streaming.VideoClusterToServerMessage}
 */
proto.video_streaming.VideoClusterToServerMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.video_streaming.VideoMessage;
      reader.readMessage(value,proto.video_streaming.VideoMessage.deserializeBinaryFromReader);
      msg.setVideodata(value);
      break;
    case 2:
      var value = new proto.video_streaming.ClientInfoWithLoginMessage;
      reader.readMessage(value,proto.video_streaming.ClientInfoWithLoginMessage.deserializeBinaryFromReader);
      msg.setUserinfo(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.video_streaming.VideoClusterToServerMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.video_streaming.VideoClusterToServerMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.video_streaming.VideoClusterToServerMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.video_streaming.VideoClusterToServerMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVideodata();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.video_streaming.VideoMessage.serializeBinaryToWriter
    );
  }
  f = message.getUserinfo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.video_streaming.ClientInfoWithLoginMessage.serializeBinaryToWriter
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * optional VideoMessage videoData = 1;
 * @return {?proto.video_streaming.VideoMessage}
 */
proto.video_streaming.VideoClusterToServerMessage.prototype.getVideodata = function() {
  return /** @type{?proto.video_streaming.VideoMessage} */ (
    jspb.Message.getWrapperField(this, proto.video_streaming.VideoMessage, 1));
};


/**
 * @param {?proto.video_streaming.VideoMessage|undefined} value
 * @return {!proto.video_streaming.VideoClusterToServerMessage} returns this
*/
proto.video_streaming.VideoClusterToServerMessage.prototype.setVideodata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.video_streaming.VideoClusterToServerMessage} returns this
 */
proto.video_streaming.VideoClusterToServerMessage.prototype.clearVideodata = function() {
  return this.setVideodata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.video_streaming.VideoClusterToServerMessage.prototype.hasVideodata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ClientInfoWithLoginMessage userInfo = 2;
 * @return {?proto.video_streaming.ClientInfoWithLoginMessage}
 */
proto.video_streaming.VideoClusterToServerMessage.prototype.getUserinfo = function() {
  return /** @type{?proto.video_streaming.ClientInfoWithLoginMessage} */ (
    jspb.Message.getWrapperField(this, proto.video_streaming.ClientInfoWithLoginMessage, 2));
};


/**
 * @param {?proto.video_streaming.ClientInfoWithLoginMessage|undefined} value
 * @return {!proto.video_streaming.VideoClusterToServerMessage} returns this
*/
proto.video_streaming.VideoClusterToServerMessage.prototype.setUserinfo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.video_streaming.VideoClusterToServerMessage} returns this
 */
proto.video_streaming.VideoClusterToServerMessage.prototype.clearUserinfo = function() {
  return this.setUserinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.video_streaming.VideoClusterToServerMessage.prototype.hasUserinfo = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 timeStamp = 3;
 * @return {number}
 */
proto.video_streaming.VideoClusterToServerMessage.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.video_streaming.VideoClusterToServerMessage} returns this
 */
proto.video_streaming.VideoClusterToServerMessage.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.video_streaming.VideoDataToFrontMessage.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.video_streaming.VideoDataToFrontMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.video_streaming.VideoDataToFrontMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.video_streaming.VideoDataToFrontMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.video_streaming.VideoDataToFrontMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    videomessageList: jspb.Message.toObjectList(msg.getVideomessageList(),
    proto.video_streaming.VideoMessage.toObject, includeInstance),
    userloginsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.video_streaming.VideoDataToFrontMessage}
 */
proto.video_streaming.VideoDataToFrontMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.video_streaming.VideoDataToFrontMessage;
  return proto.video_streaming.VideoDataToFrontMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.video_streaming.VideoDataToFrontMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.video_streaming.VideoDataToFrontMessage}
 */
proto.video_streaming.VideoDataToFrontMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.video_streaming.VideoMessage;
      reader.readMessage(value,proto.video_streaming.VideoMessage.deserializeBinaryFromReader);
      msg.addVideomessage(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addUserlogins(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.video_streaming.VideoDataToFrontMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.video_streaming.VideoDataToFrontMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.video_streaming.VideoDataToFrontMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.video_streaming.VideoDataToFrontMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVideomessageList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.video_streaming.VideoMessage.serializeBinaryToWriter
    );
  }
  f = message.getUserloginsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * repeated VideoMessage videoMessage = 1;
 * @return {!Array<!proto.video_streaming.VideoMessage>}
 */
proto.video_streaming.VideoDataToFrontMessage.prototype.getVideomessageList = function() {
  return /** @type{!Array<!proto.video_streaming.VideoMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.video_streaming.VideoMessage, 1));
};


/**
 * @param {!Array<!proto.video_streaming.VideoMessage>} value
 * @return {!proto.video_streaming.VideoDataToFrontMessage} returns this
*/
proto.video_streaming.VideoDataToFrontMessage.prototype.setVideomessageList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.video_streaming.VideoMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.video_streaming.VideoMessage}
 */
proto.video_streaming.VideoDataToFrontMessage.prototype.addVideomessage = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.video_streaming.VideoMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.video_streaming.VideoDataToFrontMessage} returns this
 */
proto.video_streaming.VideoDataToFrontMessage.prototype.clearVideomessageList = function() {
  return this.setVideomessageList([]);
};


/**
 * repeated string userLogins = 2;
 * @return {!Array<string>}
 */
proto.video_streaming.VideoDataToFrontMessage.prototype.getUserloginsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.video_streaming.VideoDataToFrontMessage} returns this
 */
proto.video_streaming.VideoDataToFrontMessage.prototype.setUserloginsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.video_streaming.VideoDataToFrontMessage} returns this
 */
proto.video_streaming.VideoDataToFrontMessage.prototype.addUserlogins = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.video_streaming.VideoDataToFrontMessage} returns this
 */
proto.video_streaming.VideoDataToFrontMessage.prototype.clearUserloginsList = function() {
  return this.setUserloginsList([]);
};


goog.object.extend(exports, proto.video_streaming);
