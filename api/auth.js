"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.whoamiRequest = exports.logoutRequest = exports.loginRequest = exports.generarQRRequest = void 0;
var _axios = _interopRequireDefault(require("axios"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// const API = 'https://banticfintechapi.azurewebsites.net'
var API_MIDDLEWARE_SERVER = 'https://banticfintechapi.azurewebsites.net';
var API = process.env.API_MIDDLEWARE || API_MIDDLEWARE_SERVER;
var loginRequest = exports.loginRequest = function loginRequest(user) {
  return _axios["default"].post("".concat(API, "/api/MixQR/getFBToken"), user);
};
var whoamiRequest = exports.whoamiRequest = function whoamiRequest(user) {
  return _axios["default"].post("".concat(API, "/api/MixQR/getFBUserData"), user);
};
var generarQRRequest = exports.generarQRRequest = function generarQRRequest(user) {
  return _axios["default"].post("".concat(API, "/api/MixQR//getQRImage"), user);
};
var logoutRequest = exports.logoutRequest = function logoutRequest() {
  return _axios["default"].post("/logout");
};