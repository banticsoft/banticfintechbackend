"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerSchema = exports.loginSchema = void 0;
var _zod = require("zod");
var registerSchema = exports.registerSchema = _zod.z.object({
  username: _zod.z.string({
    required_error: "Username is required"
  }),
  email: _zod.z.string({
    required_error: "Email is required"
  }).email({
    message: "invalid email"
  }),
  password: _zod.z.string({
    required_error: "Password is required"
  }).min(6, {
    message: "Password must be at least 6 characteres"
  })
});
var loginSchema = exports.loginSchema = _zod.z.object({
  username: _zod.z.string({
    required_error: "El usuario es requerido"
  }),
  password: _zod.z.string({
    required_error: "La contraseña es requerida"
  }).min(6, {
    message: "La contraseña debe tener al menos 6 caracteres"
  })
});