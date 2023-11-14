"use strict";

var _app = _interopRequireDefault(require("./app.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//import './database/database.js';

var main = function main() {
  _app["default"].listen(_app["default"].get('PORT'), function () {
    console.log("Server on port ".concat(_app["default"].get('PORT'), "..."));
  });
};
main();