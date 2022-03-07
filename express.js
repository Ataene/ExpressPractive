const express = require("express");
const bodyParser = require('body-parser');

const app =  express();

const PORT = 3000;
app.get("/", function(req, res){

    res.send("ExpressJS Rulez!!!");
});

app.get("/2", function(req, res){
    res.send({
        "hello" : "world"
    });
});


app.get("/3", function(req, res){

    const time = new Date();

    res.send(time);
})

app.listen(PORT, function(){

    console.log("Server is running on port " + PORT);
})