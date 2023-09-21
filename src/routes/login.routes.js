import { Router } from "express";
import { methods as loginController } from "../controllers/login.controller";
import { validateSchema } from './../middlewares/validator.middleware.js'
import { loginSchema } from './../schemas/auth.schema'

const router = Router();

router.post("/signin", validateSchema(loginSchema), (loginController.AutenticarUsuario));
router.get("/verify", loginController.verifyToken);

export default router;