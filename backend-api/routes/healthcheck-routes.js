const express = require('express');
const router = express.Router();

router.get('/liveness', (req, res)=>{
	res.send("/liveness endpoint hit");
});

router.get('/readiness', (req, res)=>{
	res.send("/readiness endpoint hit");
});

module.exports = router;
