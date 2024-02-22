import express from "express"
import mongoose from "mongoose";
import route_ticket from "./Route/route_ticket.js"
import route_user from "./Route/route_user.js"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()
//import path from "path"
//import { fileURLToPath } from 'url';


//import path  from "path";

let app = express()
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true})); 


mongoose.connect(process.env.URI)
.then(()=> console.log("Connexion a Mongo réussie !"))
.catch(()=> console.log("Connexion a Mongo échouée"));

app.use('/ticket', route_ticket)
app.use('/user', route_user)


//app.use('/uploads', express.static(path.join(__dirname, 'uploads')));



const port = process.env.PORT;
app.listen(port, () => console.log(`Le serveur tourne sur le port: ${port}`));