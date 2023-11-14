"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _login = require("../controllers/login.controller");
var _validatorMiddleware = require("./../middlewares/validator.middleware.js");
var _auth = require("./../schemas/auth.schema");
var _validateToken = require("./../middlewares/validateToken.js");
var router = (0, _express.Router)();
router.post("/signin", (0, _validatorMiddleware.validateSchema)(_auth.loginSchema), _login.methods.AutenticarUsuario);
router.post("/whoami", _validateToken.authRequired, _login.methods.whoami);
var _default = exports["default"] = router;