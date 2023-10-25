import { getConnectionLocal } from "../database/database.js";
import { encrypt, compare } from './../helpers/handleBcrypt.js'
import { loginRequest, whoamiRequest } from './../api/auth.js'

import axios from 'axios'
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

        if (respuesta.data.token == ""){
            //throw new Error("Datos incorrectos o token vencido");    
            console.log("No tiene data")    
            return res.status(400).send(['Datos incorrectos o token vencido']);
        }

        res.cookie("token", respuesta.data.token);
        console.log("el token tiene: ");
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


const whoami = async(req, res) => {
    try {
        const { token } = req.cookies

        const usuario = {
            user: "",
            password: "",
            token
        }

        const usuario2 = {
            idUser: 1,
            nameUser: "ronel",
            claveUser: null,
            typeUser: "ADM",
            idCustomer: 1,
            customer: "PROESA",
            idBank: 1,
            codBank: "1111",
            bank: "BNB",
            codError: "0",
            descError: ""
        }
        
        /* const API = 'https://banticfintechapi.azurewebsites.net'
        const respuesta = await axios.get(`${API}/api/MixQR/getFBUserData`, usuario, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        if (respuesta.codError == "0"){  
            return res.json({
                username: "ronel 1231",
            });                    
        }  */
        let { idUser, nameUser, typeUser, idCustomer, customer, idBank, codBank, bank } = usuario2;
        
        return res.json({ idUser, nameUser, typeUser, idCustomer, customer, idBank, codBank, bank });   
        //return res.status(400).send([respuesta.descError]);
    } catch (error) {
        console.log(error);
        res.status(401).json({message: "No esta habilitado el cliente"})
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
    whoami
};
