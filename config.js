"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _dotenv = require("dotenv");
(0, _dotenv.config)();
var DB_HOST = 'banticfintech.database.windows.net';
var DB_PORT = 1433;
var DB_DATABASE = 'banticfintech';
var DB_USER = 'bfadmin';
var DB_PASSWORD = 'Password123*';
var _default = exports["default"] = {
  host: process.env.DB_HOST || DB_HOST,
  port: process.env.DB_PORT || DB_PORT,
  database: process.env.DB_DATABASE || DB_DATABASE,
  user: process.env.DB_USER || DB_USER,
  password: process.env.DB_PASSWORD || DB_PASSWORD
};