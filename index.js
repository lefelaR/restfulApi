//express is installed in the app. not i  have to target the exprss in the app 
const express = require('express');
const app = express();
const PORT = 8080;


app.use(express.json());


app.get('/user',(req, res)=>{
    res.status(200).send(
        {
         tshirt:'👕',
         size: 'larger',
         style: 'slimfit'
    }
    )
});

app.post(
    '/user/:id',(req, res)=>{
     const {id } = req.params;  
     const {username} = req.body;
     if(!username){
         res.status(418).send({message: 'We require a logo from you in the body'})
     }
     res.send({
         user: `👕 your username has been updated to ${username} and ID of ${id}`,
     });
    })


app.listen(
    PORT,
    ()=> console.log(`its alive on localhost:${PORT}`)
)


