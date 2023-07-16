const express = require('express');
const cors = require('cors')
const connectDB = require('./config/db');
const colors = require('colors');
const schema = require('./schema/schema');
require('dotenv').config();
const {graphqlHTTP} = require('express-graphql');
const port = process.env.PORT || 5000;
const app = new express();


connectDB();
/// connect to database
app.use(cors());

app.get('/',(req,res)=>{
  res.send("THis is from backend ")
})

    app.use(
      '/graphql',
      graphqlHTTP({
        schema,
        graphiql: process.env.NODE_ENV === 'development',
      })
    );
    
    app.listen(port, console.log(`Server running on port ${port}`));