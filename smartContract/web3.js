const Web3 = require('web3');
let url = "http://127.0.0.1:8543";

let web3;
web3 = new Web3(url);

module.exports = web3;