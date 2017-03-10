"use strict";

exports.__esModule = true;

var _stringify = require("../core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (module, imports) {
  if (!module.__esModule) throw new Error("Only ES modules can be checked");
  var invalid = imports.filter(function (i) {
    return !Object.prototype.propertyIsEnumerable.call(module, i);
  });

  if (invalid.length > 0) {
    var error = new Error("Unknown export" + (invalid.length > 1 ? "s " : " ") + (0, _stringify2.default)(invalid) + " imported");
    error.module = module;
    throw error;
  }
};