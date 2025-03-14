import express from "express"
import { PORT } from "./config/env.js";
import connectToDatabase from "./database/mongodb.js";
import {addCenter, getAllCenters} from "./controllers/center.controller.js";



const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.listen(PORT,async ()=>{
    console.log("App running");
    await connectToDatabase();
})

app.post('/', addCenter);
app.get('/',getAllCenters);

