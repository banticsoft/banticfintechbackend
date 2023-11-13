"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fqueries = void 0;
var fqueries = {
  getAllUser: "select * from users",
  createNewUser: "insert into users (usuario, clave) values (@usuario, @clave)",
  getUserById: "select * from users where id = @id",
  deleteUserById: "delete from users where id = @id",
  getAllQRByUser: "select * from manageQR where userName = @userName and fkCustomer = @fkCustomer and typeRequest = @typeRequest order by datesend DESC"
};
exports.fqueries = fqueries;