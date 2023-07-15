const {projects,clients} = require('../sampleData.js');
const {
    GraphQLObjectType,GraphQLID,GraphQLString,GraphQLSchema, GraphQLList} = require('graphql');
/// Client Type 
// Mongoose models
const Project = require('../models/Project');
const Client  = require('../models/Client');


const ClientType = new GraphQLObjectType({
name:'Client',
fields:() => ({
   id : {type : GraphQLID},
   name : {type : GraphQLString},
   email : {type : GraphQLString},
   phone : {type : GraphQLString},
})
});
// Project Type shcema
const ProjectType = new GraphQLObjectType({
    name:'Project',
    fields:() => ({
       id : {type : GraphQLID},
       name : {type : GraphQLString},
       phone : {type : GraphQLString},
       status : {type : GraphQLString},
    description:{type : GraphQLString}
    })
    });
const RootQuery = new GraphQLObjectType({
    name : 'RootQueryType', //// RootQueryType must a-z A-Z not leading or trailing spaces 
    fields:{
        projects : { //query to get list of all clients
        type : new  GraphQLList(ProjectType),
         resolve(parent,args){
           //// return projects;
          Project.find(); 
         }
    } ,
    project : { /// query to  get data of all client s 
        type : ProjectType ,
        args : {id : {type : GraphQLID}},
        resolve(parent,args){
            return Project.findById(args.id);
           //// return projects.find(project => project.id === args.id);
        }
    },
        clients : { //query to get list of all clients
            type : new  GraphQLList(ClientType),
             resolve(parent,args){
                return Client.find();
             }
        } ,
        client : { /// query to  get data of all client s 
            type : ClientType ,
            args : {id : {type : GraphQLID}},
            resolve(parent,args){
                return Client.find(args.id);
            }
        }
    }
});

/// why rootQuery is used in GraphQL ?
module.exports = new GraphQLSchema ({
    query : RootQuery
})