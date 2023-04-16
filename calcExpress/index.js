const express = require('express');
const app = express();
const port = 3000

app.get('/add', function(req, res){
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
    const result = num1+num2;
    res.status(200).json(`result = ${result}`);
})

app.get('/subtract', function(req, res){
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
    const result = num1-num2;
    res.status(200).json(`result = ${result}`);
})

app.get('/multiply', function(req, res){
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
    const result = num1*num2;
    res.status(200).json(`result = ${result}`);
})

app.get('/divide', function(req, res){
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
    const result = num1/num2;
    res.status(200).json(`result = ${result}`);
})

app.listen(port,function(){
    console.log(`Express is listening on port ${port}`)
})