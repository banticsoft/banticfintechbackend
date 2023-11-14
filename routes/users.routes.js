"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _users = require("../controllers/users.controller");
var _validatorMiddleware = require("./../middlewares/validator.middleware.js");
var _user = require("./../schemas/user.schema");
var _validateToken = require("./../middlewares/validateToken.js");
var router = (0, _express.Router)();
router.get("/", _users.methods.getAllUsers);
router.post("/generarQR", _validateToken.authRequired, (0, _validatorMiddleware.validateSchema)(_user.userGenerarQRSchema), _users.methods.generarQR);
router.post("/verificarQR", _validateToken.authRequired, _users.methods.verificarQR);
router.get("/:id", _users.methods.getOneUser);
router.post("/", _users.methods.createNewUser);
router.put("/:id", _users.methods.updateOneUser);
router["delete"]("/:id", _users.methods.deleteOneUser);
var _default = exports["default"] = router;