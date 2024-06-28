import mongoose from "mongoose";
import serverConfig from "./config/serverConfig"

async function start(){
    await mongoose.connect(serverConfig.DB_URL);
    console.log("Database connected successfully!");

}
start();