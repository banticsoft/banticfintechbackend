"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userGenerarQRSchema = void 0;
var _zod = require("zod");
var userGenerarQRSchema = exports.userGenerarQRSchema = _zod.z.object({
  glosa: _zod.z.string({
    required_error: "La glosa es requerida"
  }),
  amount: _zod.z.number({
    required_error: "El monto es requerido",
    invalid_type_error: "El monto debe ser un numero"
  }).min(1, {
    message: "El monto debe ser mayor o igual a 1"
  })
});