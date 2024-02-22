import express  from "express";
import {afficher, afficher_etat, afficherone, creation, modifier, supprimer} from "../Controller/control_ticket.js"
//import { isLoggedInFR } from "../Controller/control_user.js";
//import upload from "../helpers/filehelper.js";
let router = express.Router()


router.post("/", creation)
router.get("/",afficher)
router.get("/:id", afficherone)
router.get("/etat/:etat" , afficher_etat)
router.patch("/:id", modifier)
//router.patch("/:id", upload.single('file'), modifier)
router.delete("/:id", supprimer)

export default router 