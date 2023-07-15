const express = require('express');
const connectDB = require('./config/db');
const colors = require('colors');
const schema = require('./schema/schema');
require('dotenv').config();
const {graphqlHTTP} = require('express-graphql');
const port = process.env.PORT || 5000;
const app = new express();



/// connect to database


app.use('/graphql',graphqlHTTP({
   schema,
   graphiql : true
  //// graphiql:process.env.NODE_ENV === 'development'
}))
app.get('/',(req,res)=>{
    res.send("Hello World Fuck My ass ")
})

app.listen(port , 
    console.log(`Server is running successfully ${port} `)
)