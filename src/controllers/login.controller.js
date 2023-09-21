import { getConnectionLocal } from "../database/database.js";
import { encrypt, compare } from './../helpers/handleBcrypt.js'
import { loginRequest } from './../api/auth.js'

import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)


const AutenticarUsuario = async(req, res)=>{
    try {        

        const { username, password } = req.body;

        console.log("me esta llegando al servidor")
        console.log(username, password);

        const user = {
            username,
            password,
            expiration: dayjs.utc(new Date()).add(2, 'days').format("YYYY-MM-DD")
            //expiration: dayjs.utc(new Date()).format("YYYY/MM/DD")
        }

        const respuesta = await loginRequest(user);
        res.cookie("token", respuesta.data.token);
        console.log(respuesta.data.token);

        res.json({
            username
        });
    } catch (error) {  
        const errors = ['el usuario o la contraseña son invalidos']  
        res.status(500);
        res.send(errors);
    }
    
}


const verifyToken = async(req, res) => {
    try {
        const {token} = req.cookies
        
        if (!token) return res.status(401).json({message: "Unauthorized"})

        //const respuesta = await prueba();        

        return res.json({
            username: "ronel",
        });
    } catch (error) {
        console.log(error);
        res.status(401).json({message: "Unauthorized"})
    }
}


function prueba(){
    return new Promise( (resolve, reject) => {
        let isDone = true
        if (isDone){
            const user = {
                id: 1,
                username: "Reinaldo"
            }
            resolve(user);
        }
        reject("No esta hecho")        
    });
}


export const methods = {
    AutenticarUsuario,
    verifyToken
};
