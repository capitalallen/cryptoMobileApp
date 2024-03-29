const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cryptoRoutes = require('./routes/cryptoroutes');
app.use(bodyParser.json()); // application/json

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/', cryptoRoutes);

const PORT = 3000;
app.listen(PORT, () =>{
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');  
})