// Creating a server using Express.js
const express = require('express');

const app = express();
app.use(express.static(__dirname + '/public'))


app.listen(3000);
//this is the port number