"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _login = _interopRequireDefault(require("./routes/login.routes"));
var _users = _interopRequireDefault(require("./routes/users.routes"));
var _cobranza = _interopRequireDefault(require("./routes/cobranza.routes"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
var _package = require("./../package.json");
var _cors = _interopRequireDefault(require("cors"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//import './database/database.js'; //Prueba

_dotenv["default"].config();
var app = (0, _express["default"])();
var ORIGIN_CORS_FRONTEND = 'https://frontendbf.banticapps.com/';
var DOMINIO = process.env.ORIGIN_CORS || ORIGIN_CORS_FRONTEND;
app.use((0, _cors["default"])({
  origin: [DOMINIO],
  //origin: '*', 
  credentials: true //tambien vas a poder establecer las cookies
}));

//Settings
var PORT = process.env.PORT || 3000;
app.set("PORT", PORT);

//Middleware
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use((0, _cookieParser["default"])());

//Routes
app.use("/api/v1/auth", _login["default"]);
app.use("/api/v1/users", _users["default"]);
app.use("/api/v1/cobranza", _cobranza["default"]);
app.get("/", function (req, res) {
  res.send("Raiz del proyecto");
});
app.get("/api/v1/version", function (req, res) {
  res.send("La version del producto es ".concat(_package.version));
});
app.use(function (req, res, next) {
  res.status(404).json({
    message: "ruta no encontrada"
  });
});
var _default = exports["default"] = app;