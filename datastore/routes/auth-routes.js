const express = require('express');
const router = express.Router();
const { db } = require('../firestore');

router.get('/test',(req, res)=>{
	res.send("/test hit");
})

router.post('/login', (req, res) => {
	console.log(req);
	console.log(res);
	res.send("/login hit");
});

router.post('/logout', (req, res) => {
	console.log(req);
	console.log(res);
	res.send("/logout hit");
});

router.post('/register', (req, res) => {

	console.log(req);
	console.log(res);
	res.send("/register hit");
});

module.exports = router;