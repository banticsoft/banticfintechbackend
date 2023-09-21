import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import loginRoutes from "./routes/login.routes";
import usersRoutes from "./routes/users.routes";
import cookieParser from 'cookie-parser';
//import './database/database.js'; //Prueba
import cors from 'cors'

dotenv.config();

const app = express();

app.use(cors({
    origin: ['http://127.0.0.1:5173', 'http://localhost:5173'],
    credentials: true //tambien vas a poder establecer las cookies
}));

//Settings
const PORT = process.env.PORT || 3000;
app.set("PORT", PORT);

//Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

//Routes
app.use("/api/v1/auth", loginRoutes);
app.use("/api/v1/users", usersRoutes);

app.use( (req, res, next) => {
    res.status(404).json({
        message: "ruta no encontrada"
    });
});


export default app;