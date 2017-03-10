"use strict";

exports.__esModule = true;

var _stringify = require("../core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

var _symbol = require("../core-js/symbol");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof2 = require("../helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (module, name) {
  if (!module.__esModule) throw new Error("Only ES modules can be checked");

  if ((typeof name === "undefined" ? "undefined" : (0, _typeof3.default)(name)) === "symbol" || name && typeof _symbol2.default === "function" && name.constructor === _symbol2.default && name !== _symbol2.default.prototype) {
    return module[name];
  }

  if (!Object.prototype.propertyIsEnumerable.call(module, name)) {
    throw new Error("Unknown export " + (0, _stringify2.default)(name) + " imported");
  }

  return module[name];
};