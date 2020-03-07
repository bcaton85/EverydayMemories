const express = require('express');
const router = express.Router();

var Users = require('../models/users.js');

router.post('/userExists', async (req, res) => {

	//console.log(req);

	const email = req.body.email;
	const password = req.body.password;

	if(!email){
		console.log('request rejected emal');
		return res.status(400).send('Invalid request body');
	}

	if(!password){
		console.log('request rejected emal');
		return res.status(400).send('Invalid request body');
	}


	//TODO: Add in check for user exists
	
	res.status(200).send({status: "success"});
});

router.post('/login', async (req, res)=>{
	const email = req.body.email;
	const password = req.body.password;

	if(!email){
		return res.status(400).send('Invalid request body');
	}

	if(!password){
		return res.status(400).send('Invalid request body');
	}

	let resContent = {
		success: true,
		loggedIn: false
	}

	// TODO: confirm this call is async
	Users.find({email:email}, (err, dbRes)=>{
		console.log(err);
		console.log(dbRes);
		if(err){
			console.error("User not found...");
			res.status(500).send();
			return;
		}

		if(dbRes.length == 0){
			resContent.message = "Username not found";
			res.status(404).send(resContent);
			return;
		}

		if(password == dbRes[0].password){
			resContent.loggedIn = true;
		}

		res.status(200).send(resContent);
	});
});

router.post('/register', async (req, res) => {

	const name = req.body.name;
	const email = req.body.email;
	const password = req.body.password;

	if(!name){
		return res.status(400).send('Invalid request body');
	}

	if(!email){
		return res.status(400).send('Invalid request body');
	}

	if(!password){
		return res.status(400).send('Invalid request body');
	}

	res.status(201).send({status:"success"});
});

module.exports = router;