const contractCaller = require('./contractCall');

var accounts = ["0x062d8259bdc485bca82f2a962dc3245136ca5c38", "0x3989c22fc18e1d7b79a6d3190b9a53566d33ff88"]

main = async(accounts) =>{
    try {
        // get accounts and print
        var a = await contractCaller.getAccounts()
        console.log('accounts',a)
        // mine coins from account 1 
        var b = await contractCaller.mintCoin(100)
        console.log('mint function return',b)
        //get balance of account 1
        var c = await contractCaller.getBalance(accounts[0])
        console.log(c.toNumber())
        // send balance to account 2 from account 1
        await contractCaller.sendToken(accounts[0],accounts[1],1)
        var d = await contractCaller.getBalance(accounts[1])
        var e = await contractCaller.supply()
        console.log(e)
        // console.log(d)
    } catch (err) {
        console.log(err)
    }
}
main(accounts)