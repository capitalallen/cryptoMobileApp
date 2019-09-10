const express = require('express');
const router = express.Router();
const crytoController = require('../controller/crytoCaller');
/**
 * supply: total supply of the token
 * mint: mine token
 * balance: check balace of an account
 * transfer: send token
 */
// /balance/?account=""
router.get('/balance',crytoController.balance);
router.get('/supply',crytoController.totalSupply);
// /mine/?amount=
router.get('/mine',crytoController.minCoin);
// /transfer/?sender=&receiver=&amount=
router.get('/transfer',crytoController.sendToken);
module.exports = router;