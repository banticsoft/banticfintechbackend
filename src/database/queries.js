export const fqueries = {
    getAllUser: "select * from users",
    createNewUser: "insert into users (usuario, clave) values (@usuario, @clave)",
    getUserById: "select * from users where id = @id",
    deleteUserById: "delete from users where id = @id"
};