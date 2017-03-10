"use strict";

exports.__esModule = true;

var _defineProperty = require("../core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (exports, ownExports, module) {
  if (!module.__esModule) throw new Error("Only ES modules can be spread");

  for (var key in module) {
    if (!Object.prototype.hasOwnProperty.call(module, key)) continue;
    if (key === "__esModule" || key === "default" || ownExports.indexOf(key) >= 0) continue;
    if (key in exports && sameValue(exports[key], module[key])) continue;
    (0, _defineProperty2.default)(exports, key, {
      enumerable: true,
      get: function (key) {
        return function () {
          return module[key];
        };
      }(key)
    });
  }

  function sameValue(x, y) {
    return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
  }
};