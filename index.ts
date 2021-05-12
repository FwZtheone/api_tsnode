var express = require('express')
var app = express()
const {Database}  = require('./database/db');
require('dotenv').config()
const {User} = require('./model/User.ts');
const mydb = new Database(process.env.DB_TYPE, process.env.DB_PATH);


mydb.run();
app.get('/', (req:any,res:any,next:any)=> {
    console.log("hello");
    User.init();
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT}`)
  })