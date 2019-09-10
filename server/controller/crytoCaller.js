const smartContractCall = require('../../smartContract/contractCall');
/**
 * method: totalsupply()
 * input:()
 * output: total supply of the coin
 */
exports.totalSupply = async(req,res,next) =>{
    try {
        var supply = await smartContractCall.supply();
        await res.status(200).json({
            supply:supply
        });    
    } catch (error) {
        res.status(404).send(error)
    }
}
/**
 * method: mine coin
 * input: amount
 * output: receipt 
 */
exports.minCoin= async(req,res,next) =>{
    try {
        let amount = parseInt(req.query.amount);
        var response = null
        if (amount){
            var receipt = await smartContractCall.mintCoin(amount)
            if (receipt){
                response = amount
                await res.status(200).json({
                    response: response
                })
            }
            else{
                await res.send(response)
            }
        }
        else{
            res.status(200).send("amount undefined")
        }
    } catch (error) {
        res.status(404).send(error)
    }
}
/**
 * method: get balance of the given account
 * input: account
 * output: balance
 */
exports.balance = async(req,res,next)=>{
    try {
        var account = req.query.account
        const b = await smartContractCall.getBalance(account)
        console.log(b)
        if (b){
            await res.status(200).json({
                balance:b
            })
        } else {
            await res.status(200).send("account undefined")
        }
    } catch (err) {
        res.status(404).send(err)
    }
}
/**
 * method: transfer token 
 * input: sender,receiver,amount
 * output: True or False
 */
exports.sendToken = async(req,res,next) =>{
    try {
        const sender = req.query.sender
        const receiver = req.query.receiver
        const amount = req.query.amount
        var output = await smartContractCall.sendToken(sender,receiver,amount)
        var senderBalance = null
        if (output) {
            senderBalance = await smartContractCall.getBalance(sender)
            await res.status(200).json({
                senderBalance: senderBalance
            })
        } else {
            await res.status(200).send("try again")
        }
    } catch (err) {
        res.status(404).send(err)
    }
}