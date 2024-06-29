import mongoose from "mongoose";
import serverConfig from "./config/serverConfig"
import { ApolloServer } from "apollo-server";
import typedefs from "./typedefs";
import resolvers from "./resolvers";


//create the new apollo server instance
const server= new ApolloServer({
    typeDefs : typedefs ,
    resolvers : resolvers,
})

async function start(){
    await mongoose.connect(serverConfig.DB_URL);
    console.log("Database connected successfully!");
    await server.listen();
    console.log("Server started successfully!");
}
start();

