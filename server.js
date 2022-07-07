const express = require('express');
const mongoose = require('mongoose');
const {ApolloServer, gql} = require('apollo-server-express');
const Persona = require('./models/persona');
const cors = require('cors');

// mongodb://localhost:27017
mongoose.connect('mongodb://localhost:27017',{useNewUrlParser:true, useUnifiedTopology: true});
//mongoose.connect('mongodb+srv://pansobao:admin1234@cluster0.ptbb1.mongodb.net/frontend',{useNewUrlParser:true, useUnifiedTopology: true});
//mongoose.connect('mongodb+srv://pansobao:admin1234@cluster0.ptbb1.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser:true, useUnifiedTopology: true});
//mongodb+srv://<username>:<password>@cluster0.ptbb1.mongodb.net/test
const typeDefs = gql`
    type Persona{
        id: ID!
        rut: Int!
        nombre: String!
    }
    type Alert{
        message: String!
    }
    input PersonaInput{
        rut: Int!
        nombre: String!
    }
    type Query{
        getPersonas(page: Int, limit: Int = 1) : [Persona]
        getPersona(id:ID): Persona
    }
    type Mutation{
        addPersona(input: PersonaInput): Persona
        updPersona(id: ID, input: PersonaInput): Persona
        delPersona(id: ID): Alert
    }
`;

const resolvers ={
    Query: {
        async getPersonas(obj, {page,limit}){
            const persona = await Persona.find();
            return persona;
        },
        async getPersona(obj, {id}){
            const persona = await Persona.findById(id)
            return persona;
        }
    },
    Mutation : {
        async addPersona(obj, {input}){
            const persona = new Persona(input);
            persona.save();
            return persona;
        },
        async updPersona(obj,{id, input}){
            const persona = await Persona.findByIdAndUpdate(id, input);
            return persona;
        },
        async delPersona(obj, {id}){
            await Persona.deleteOne({_id: id})
            return {
                message: `La persona ${id} fue Eliminada` 
            }
        }
    }
}


let apolloServer = null;

const corsOptions = {
    origin: "http://localhost:8090",
    credentials: false
}

async function startServer() {
    const apolloServer = new ApolloServer({typeDefs, resolvers, corsOptions})
    await apolloServer.start();

    apolloServer.applyMiddleware({app, cors:false});
}

startServer();

const app = new express();
app.use(cors());
app.listen(8090, function(){
    console.log('Servidor Iniciado');
});

