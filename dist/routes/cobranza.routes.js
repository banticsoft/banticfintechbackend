"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _cobranza = require("../controllers/cobranza.controller");
var _validateToken = require("./../middlewares/validateToken.js");
//import { validateSchema } from './../middlewares/validator.middleware.js'
//import { loginSchema } from './../schemas/auth.schema'
var router = (0, _express.Router)();
router.post("/verificar", _validateToken.authRequired, _cobranza.methods.Verificar);
router.get("/getAllQR", _validateToken.authRequired, _cobranza.methods.getAllQRByUser);
//router.get("/getAllQR", authRequired, cobranzaController.getAllQRByUser);
//router.post("/generarQR",authRequired, validateSchema(userGenerarQRSchema), (usersController.generarQR));
var _default = router;
exports["default"] = _default;