import { login, signup } from "../Controller/control_user.js"
import express  from "express";
let router = express.Router()


router.post("/signup", signup);
router.post("/login", login);
    

export default router 