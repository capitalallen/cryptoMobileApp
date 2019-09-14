import axios from 'axios'
// const axios = require('axios')
/**
 * get total supply
 * fetch url and return res.response
 */
exports.getTotalSupply = () =>{
    url = 'http://localhost:3000/supply';
    a = axios.get(url).then(function (response) {
        return response.data.supply
    },(err) =>{
        return err
    })
    return a
}
/**
 * http://localhost:3000/mine/?amount=5
 * mine tokens
 * input: amount
 * form url with amount 
 * fetch url
 */
exports.mineToken = (amount,address) =>{
    if (address != "0x062d8259bdc485bca82f2a962dc3245136ca5c38"){
        return false
    }
    url = 'http://localhost:3000/mine/?amount=' + amount.toString()
    a = axios.get(url).then((response)=>{
        if (response){
            return true
        } else{
            return false
        }
    })
    return a 
}
/**
 * get balance
 * input account address
 * output: return balance
 */
exports.getBalance = (account) =>{
    url = 'http://localhost:3000/balance/?account=' + account
    a = axios.get(url).then((response)=>{
        return response.data.balance
    },(err)=>{
        return err
    })
    return a
}
/**
 * send Token
 * input: sender,receiver,amount
 * output:receipt
 * check if input is valid
 * call REST API
 * return 
 */
exports.sendToken = (sender,receiver,amount)=>{
    if (sender.length !=42 || receiver.length !=42){
        return false
    }
    url = "http://localhost:3000/transfer/?sender=" + sender + "&receiver=" + receiver + "&amount=" + amount.toString()
    a = axios.get(url).then((response)=>{
        if (response){
            return response.data
        } else {
            return false
        }
    },(err)=>{
        return err
    })
    return a
}