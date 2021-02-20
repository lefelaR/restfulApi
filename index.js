//express is installed in the app. not i  have to target the exprss in the app 

const { request } = require("express");

// const app = require('express') this connects to the express module, but you have to openn it ip once that is done

const express = require('express');
const app = express();
const PORT = 8080;


app.use( express.json());


app.get('/tshirt',(req, res)=>{
    res.status(200).send({
        tshirt:'👕',
        size: 'larger',
        style: 'slimfit'
    })
});

app.post(
    '/tshirt/:id',(req, res)=>{
     const {id } = req.params;  
     const {logo} = req.body;

     if(!logo){
         res.status(418).send({message: 'We require a logo from you in the body'})
     }

     res.send({
         tshirt: `👕 with your ${logo} and ID of ${id}`,
     });


    })


app.listen(
    PORT,
    ()=> console.log(`its alive on localhost:${PORT}`)
)


