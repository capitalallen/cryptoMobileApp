const web3 = require('./web3');
const tokenABI = require('./build/contracts/uwoCoin.json');
const dotenv = require('dotenv');
dotenv.config();
const contractAddress = `${process.env.contractAddress}`;
var contract = new web3.eth.Contract(tokenABI.abi,contractAddress);

exports.getAccounts = async () => {
  try{
    var accounts = await web3.eth.getAccounts();
    console.log(accounts)
    return accounts;

} catch (error){
    throw error;
  }
}
// // get balance from an account

exports.getAccounts = async () => {
    try{
      var accounts = await web3.eth.getAccounts();
      return accounts;
  
  } catch (error){
      throw error;
    }
  }
  // // get balance from an account
  exports.getBalance = async (account) =>{
      try{
          contract.options.address = contractAddress;
          var balance = await contract.methods.balanceOf(account).call();
          return balance.toNumber();
      } catch(err){
          throw err;
      }
  }
  exports.mintCoin = async (amount) => {
      try {
          const address = `${process.env.masterAddress}`;
          var receipt = await contract.methods.mint(address,amount).send({from:address});
          return receipt;
      } catch (error) {
          return error
      }
  };
  
   // send token
  exports.sendToken = async (sender,receiver,amount) =>{
       try {
            contract.options.address = contractAddress;
            const receipt = await contract.methods.transfer(receiver,amount).send({from:sender});
            return receipt;
       } catch (error) {
            throw error
       }
   }
   exports.supply = async() =>{
       try {
            contract.options.address = contractAddress;
            console.log(contract.options.address);
            const s =  await contract.methods.totalSupply().call();
            if (s){
                return s.toNumber()
            }
            return s         
       } catch (error) {
           return error
       }
   }