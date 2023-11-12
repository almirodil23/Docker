const express= require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');


const mongoURI = 'mongodb://localhost:27018/nba';

const options = {    useNewUrlParser: true }

mongoose.connect(mongoURI, options)       
 .then(() => console.log('Conectado a la base de datos'))       
 .catch(err => console.log(err))
 
const teams = require('./routes/teams');
app.use(express.json());


app.listen(port, () =>{
    console.log(`Servidor escucuchando en http://localhost:${port}`);
})
