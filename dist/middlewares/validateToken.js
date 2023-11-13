"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authRequired = void 0;
//import jwt from 'jsonwebtoken';
//import { TOKEN_SECRET } from './../config.js'

var authRequired = function authRequired(req, res, next) {
  //const token = req.headers.cookie;
  var token = req.cookies.token;
  if (!token) return res.status(401).json({
    message: "No token, Authorization denied"
  });
  next();
};
exports.authRequired = authRequired;