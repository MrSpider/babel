"use strict";

exports.__esModule = true;

var _freeze = require("../core-js/object/freeze");

var _freeze2 = _interopRequireDefault(_freeze);

var _defineProperty = require("../core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _toStringTag = require("../core-js/symbol/to-string-tag");

var _toStringTag2 = _interopRequireDefault(_toStringTag);

var _symbol = require("../core-js/symbol");

var _symbol2 = _interopRequireDefault(_symbol);

var _create = require("../core-js/object/create");

var _create2 = _interopRequireDefault(_create);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = _create2.default ? (0, _create2.default)(null, {
      default: {
        value: obj,
        writable: true,
        enumerable: true
      },
      __esModule: {
        value: true
      }
    }) : {
      default: obj,
      __esModule: true
    };

    if (typeof _symbol2.default === "function" && _toStringTag2.default) {
      (0, _defineProperty2.default)(newObj, _toStringTag2.default, {
        value: "Module"
      });
    }

    return (_freeze2.default || Object)(newObj);
  }
};