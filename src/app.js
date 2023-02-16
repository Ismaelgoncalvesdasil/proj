// import { openDb } from './configDB.js';
import  { createTable,insertEntradas  } from './controler/entradas.js';

import express from 'express';
const app = express();
app.use(express.json());

createTable();

app.get('/entradas', function(req, res){
  res.send("hghngn")
})

app.post('/entradas', function(req, res){
  insertEntradas(req.body)
  res.json({
    "statucCode":200
})
})

app.put('/entradas', function(req, res){

})

app.listen(3000, ()=> console.log("api"))