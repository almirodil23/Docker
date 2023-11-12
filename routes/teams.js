const express = require('express'); 
const app = express(); 
const Team = require('../models/team'); 

app.get('/', (req, res) => {  
      Team.find({}, (err, teams) => { 
       if(err) {     
               res.status(500).json({  
                              message: 'Database error'            })      
                              }     
        res.status(200).json({ 
                       message: 'ok',          
                       teams        })    }) })
                       
                       
                       
module.exports = app;