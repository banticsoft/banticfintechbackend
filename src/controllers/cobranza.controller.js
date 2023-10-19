import { loginRequest } from './../api/auth.js'

import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)


const Verificar = async(req, res)=>{
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
            return res.status(500).send(['Datos incorrectos o token vencido']);
        }

        res.cookie("token", respuesta.data.token);
        console.log("el token tiene: ");
        console.log(respuesta.data.token);

        res.json({
            username
        });
    } catch (error) {  
        const errors = ['Datos invalidos']  
        res.status(500);
        res.send(errors);
    }
    
}


export const methods = {
    Verificar
};
