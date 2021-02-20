//express is installed in the app. not i  have to target the exprss in the app 

const { request } = require("express");

// const app = require('express') this connects to the express module, but you have to openn it ip once that is done

const app = require('express')();
const PORT = 8080;


app.listen(
    PORT,
    ()=> console.log(`its alive on localhost:${PORT}`)
)


