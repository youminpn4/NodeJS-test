const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = 3000;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/public/")));

app.get("/" , (req,res) =>{

    res.send("Hello Bello")

})

app.listen(port, () => {

    console.log("listening on port %d" ,port);
})