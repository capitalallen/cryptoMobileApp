const Migrations = artifacts.require("Migrations");
const uwoCoin = artifacts.require("uwoCoin");
module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(uwoCoin,"uwoCoin","UWO",18);
};
