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
        console.log(err)
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
exports.mineToken = (amount) =>{
    url = 'http://localhost:3000/mine/?amount=' + amount.toString()
    a = axios.get(url).then((response)=>{
        if (response){
            console.log(response)
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