// source: proto/todo.proto

/* eslint-disable */
// @ts-nocheck

const jspb = require('google-protobuf');
const goog = require('google-protobuf/google/protobuf');

const google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
Object.assign(proto, google_protobuf_empty_pb);
const google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
const google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);

goog.exportSymbol('proto.CreateTodoRequest', null, global);
goog.exportSymbol('proto.DeleteTodoRequest', null, global);
goog.exportSymbol('proto.GetTodoRequest', null, global);
goog.exportSymbol('proto.GetTodosRequest', null, global);
goog.exportSymbol('proto.Todo', null, global);
goog.exportSymbol('proto.TodoList', null, global);
goog.exportSymbol('proto.UpdateTodoRequest', null, global);
goog.exportSymbol('proto.Void', null, global);

/**
 * A tuple of {field number, class constructor} for the extension
 * field named `timestamps`.
 * @type {!jspb.ExtensionFieldInfo<!Array<!jspb.Message.FieldInfo>>}
 */
proto.timestamps = new jspb.ExtensionFieldInfo(
  1010,
  (opt_value) => {
    return jspb.Message.setRepeatedWrapperField(
      opt_value,
      1010,
      proto.Timestamp,
      null
    );
  },
  (opt_value) => {
    jspb.Message.setRepeatedWrapperField(opt_value, 1010, null);
  },
  jspb.Message.getRepeatedWrapperField,
  () => {
    return new proto.Timestamp();
  },
  jspb.Message.serializeWrapperField,
  jspb.Message.deserializeWrapperField
);

/**
 * A tuple of {field number, class constructor} for the extension
 * field named `data`.
 * @type {!jspb.ExtensionFieldInfo<!Array<!jspb.Message.FieldInfo>>}
 */
proto.data = new jspb.ExtensionFieldInfo(
  1011,
  (opt_value) => {
    return jspb.Message.setRepeatedWrapperField(
      opt_value,
      1011,
      proto.Todo,
      null
    );
  },
  (opt_value) => {
    jspb.Message.setRepeatedWrapperField(opt_value, 1011, null);
  },
  jspb.Message.getRepeatedWrapperField,
  () => {
    return new proto.Todo();
  },
  jspb.Message.serializeWrapperField,
  jspb.Message.deserializeWrapperField
);

/**
 * @enum {number}
 */
proto.TodoStatus = {
  TODO_STATUS_UNSPECIFIED: 0,
  TODO_STATUS_PENDING: 1,
  TODO_STATUS_COMPLETED: 2,
};

/**
 * @enum {number}
 */
proto.OrderBy = {
  ORDER_BY_UNSPECIFIED: 0,
  ORDER_BY_TITLE_ASC: 1,
  ORDER_BY_TITLE_DESC: 2,
  ORDER_BY_COMPLETED_ASC: 3,
  ORDER_BY_COMPLETED_DESC: 4,
  ORDER_BY_CREATED_ASC: 5,
  ORDER_BY_CREATED_DESC: 6,
  ORDER_BY_UPDATED_ASC: 7,
  ORDER_BY_UPDATED_DESC: 8,
};

/**
 * @param {number} value
 * @param {!jspb.BinaryWriter} writer
 */
proto.TodoStatus.serializeBinaryToWriter = function (value, writer) {
  jspb.Message.serializeBinaryExtensions(value, writer, proto.TodoStatus);
};

/**
 * @param {number} value
 * @param {!jspb.BinaryReader} reader
 * @return {!proto.TodoStatus}
 */
proto.TodoStatus.deserializeBinaryFromReader = function (value, reader) {
    jspb.Message.deserializeBinaryExtensions(
      value,
      reader,
      proto.TodoStatus
    );
  };
  
/**
  * @param {string} value
  * @return {!proto.TodoStatus}
  */
proto.TodoStatus.fromName = function (value) {
  return jspb.Enum.fromName(proto.TodoStatus, value);
};
  
/**
 * @param {string} key
 * @return {!proto.TodoStatus}
 */
proto.TodoStatus.fromValue = function (key) {
  return jspb.Enum.fromValue(proto.TodoStatus, key);
};

/**
 * @enum {number}
 */
proto.OrderDirection = {
  ORDER_DIRECTION_UNSPECIFIED: 0,
  ASC: 1,
  DESC: 2,
};

/**
 * @param {number} value
 * @param {!jspb.BinaryWriter} writer
 */
proto.OrderDirection.serializeBinaryToWriter = function (value, writer) {
  jspb.Message.serializeBinaryExtensions(
    value,
    writer,
    proto.OrderDirection
  );
};

/**
 * @param {number} value
 * @param {!jspb.BinaryReader} reader
 * @return {!proto.OrderDirection}
 */
proto.OrderDirection.deserializeBinaryFromReader = function (value, reader) {
  jspb.Message.deserializeBinaryExtensions(
    value,
    reader,
    proto.OrderDirection
  );
};

/**
 * @param {string} value
 * @return {!proto.OrderDirection}
 */
proto.OrderDirection.fromName = function (value) {
  return jspb.Enum.fromName(proto.OrderDirection, value);
};

/**
 * @param {string} key
 * @return {!proto.OrderDirection}
 */
proto.OrderDirection.fromValue = function (key) {
  return jspb.Enum.fromValue(proto.OrderDirection, key);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Todo.repeatedFields_ = [10, 11];

/**
 * @enum {number}
 */
proto.Todo.Color = {
  COLOR_UNSPECIFIED: 0,
  GRAY: 1,
  BLUE: 2,
  GREEN: 3,
  YELLOW: 4,
  ORANGE: 5,
  RED: 6,
  PURPLE: 7,
};

/**
 * @param {number} value
 * @param {!jspb.BinaryWriter} writer
 */
proto.Todo.Color.serializeBinaryToWriter = function (value, writer) {
  jspb.Message.serializeBinaryExtensions(value, writer, proto.Todo.Color);
};

/**
 * @param {number} value
 * @param {!jspb.BinaryReader} reader
 * @return {!proto.Todo.Color}
 */
proto.Todo.Color.deserializeBinaryFromReader = function (value, reader) {
  jspb.Message.deserializeBinaryExtensions(value, reader, proto.Todo.Color);
};

/**
 * @param {string} value
 * @return {!proto.Todo.Color}
 */
proto.Todo.Color.fromName = function (value) {
  return jspb.Enum.fromName(proto.Todo.Color, value);
};

/**
 * @param {string} key
 * @return {!proto.Todo.Color}
 */
proto.Todo.Color.fromValue = function (key) {
  return jspb.Enum.fromValue(proto.Todo.Color, key);
};

/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.Todo.prototype.getId = function () {
  return jspb.Message.getFieldWithDefault(this, 1, 0);
};

/**
 * @param {number} value
 * @return {!proto.Todo} returns this
 */

proto.Todo.prototype.setId = function (value) {
  return jspb.Message.set.TodoStatus.deserializeBinaryFromReader = function (value, reader) {
    jspb.Message.deserializeBinaryExtensions(
    value,
    reader,
    proto.TodoStatus
    );
  };
};

/**

List of repeated fields within this message type.
@private {!Array<number>}
@const
*/
proto.Todo.repeatedFields_ = [9, 10];
/**

@enum {number}
*/
proto.Todo.Priority = {
	PRIORITY_UNSPECIFIED: 0,
	PRIORITY_LOW: 1,
	PRIORITY_MEDIUM: 2,
	PRIORITY_HIGH: 3,
};
/**

@enum {number}
*/
proto.Todo.Difficulty = {
	DIFFICULTY_UNSPECIFIED: 0,
	DIFFICULTY_EASY: 1,
	DIFFICULTY_MODERATE: 2,
	DIFFICULTY_HARD: 3,
};
/**

A tuple of {field number, class constructor} for the extension
field named timestamps.
@type {!jspb.ExtensionFieldInfo<!Array<!jspb.Message.FieldInfo>>}
*/
proto.Todo.timestamps = new jspb.ExtensionFieldInfo(
	1010,
	(opt_value) => {
		return jspb.Message.setRepeatedWrapperField(
			opt_value,
			1010,
			google_protobuf_timestamp_pb.Timestamp,
			null
		);
	},
	(opt_value) => {
		jspb.Message.setRepeatedWrapperField(opt_value, 1010, null);
	},
	jspb.Message.getRepeatedWrapperField,
	() => {
		return new google_protobuf_timestamp_pb.Timestamp();
	},
	jspb.Message.serializeWrapperField,
	jspb.Message.deserializeWrapperField
);
/**

A tuple of {field number, class constructor} for the extension
field named data.
@type {!jspb.ExtensionFieldInfo<!Array<!jspb.Message.FieldInfo>>}
*/
proto.Todo.data = new jspb.ExtensionFieldInfo(
	1011,
	(opt_value) => {
		return jspb.Message.setRepeatedWrapperField(
			opt_value,
			1011,
			proto.Todo,
			null
		);
	},
	(opt_value) => {
		jspb.Message.setRepeatedWrapperField(opt_value, 1011, null);
	},
	jspb.Message.getRepeatedWrapperField,
	() => {
		return new proto.Todo();
	},
	jspb.Message.serializeWrapperField,
	jspb.Message.deserializeWrapperField
);
/**

A tuple of {field number, class constructor} for the extension
field named priority.
@type {!jspb.ExtensionFieldInfo<!Array<!jspb.Message.FieldInfo>>}
*/
proto.Todo.priority = new jspb.ExtensionFieldInfo(
	1012,
	(opt_value) => {
		return jspb.Message.getFieldWithDefault(
			opt_value,
			1012,
			0
		);
	},
	(opt_value, value) => {
		jspb.Message.setField(opt_value, 1012, value);
	},
	jspb.Message.getField,
	() => {
		return 0;
	},
	jspb.Message.serializeField,
	jspb.Message.deserializeField
);
/**

A tuple of {field number, class constructor} for the extension
field named difficulty.
@type {!jspb.ExtensionFieldInfo<!Array<!jspb.Message.FieldInfo>>}
*/
proto.Todo.difficulty = new jspb.ExtensionFieldInfo(1013, (opt_value) => {
	return jspb.Message.getFieldWithDefault(
		opt_value,
		1013,
		0
	);
},
	
(opt_value, value) => {
	jspb.Message.setField(opt_value, 1013, value);
},
jspb.Message.getField, () => {
	return 0
  }
)

/**

@param {number} value
@param {!jspb.BinaryReader} reader
@param {number=} opt_length_delimited
@return {!proto.UpdateTodoRequest}
*/
proto.UpdateTodoRequest.deserializeBinary = function(
	bytes,
	reader,
	opt_length_delimited
) {
	return jspb.Message.deserializeBinary(
		bytes,
		reader,
		proto.UpdateTodoRequest,
		opt_length_delimited
	);
};
/**

@param {!proto.UpdateTodoRequest} message
@param {!jspb.BinaryWriter} writer
@param {number=} opt_fixed32
@param {number=} opt_fixed64
@param {number=} opt_bytes
*/
proto.UpdateTodoRequest.serializeBinary = function(
	message,
	writer,
	opt_fixed32,
	opt_fixed64,
	opt_bytes
) {
	jspb.Message.serializeBinaryExtensions(
		message,
		writer,
		proto.UpdateTodoRequest,
		opt_fixed32,
		opt_fixed64,
		opt_bytes
	);
};
/**

@enum {number}
*/
proto.TodoListResponseCase = {
	TODO_LIST_RESPONSE_NOT_SET: 0,
	TODOS: 1,
	ERROR: 2,
};
/**

@enum {number}
*/
proto.TodoResponseCase = {
	TODO_RESPONSE_NOT_SET: 0,
	TODO: 1,
	ERROR: 2,
};
/**

@enum {number}
*/
proto.VoidResponseCase = {
	VOID_RESPONSE_NOT_SET: 0,
	ERROR: 1,
};
goog.object.extend(exports, proto);