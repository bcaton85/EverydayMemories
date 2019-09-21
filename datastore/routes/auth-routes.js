const express = require('express');
const router = express.Router();
const { db } = require('../firestore');
const { Datastore } = require('@google-cloud/datastore');

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

router.post('/register', async (req, res) => {

	const name = req.body.name;
	const email = req.body.email;
	const password = req.body.password;

	// Sanitation
	if(!name){
		return res.status(400).send('Invalid request body');
	}

	if(!email){
		return res.status(400).send('Invalid request body');
	}

	if(!password){
		return res.status(400).send('Invalid request body');
	}

	const db = new Datastore({
		projectId: 'memori',
		keyFilename: './memori-5c6f952e454c.json'
	});

	const key = db.key('User');

	const entity = {
		key: key,
		data: [
			{
				name: 'name',
				value: name
			},
			{
				name: 'email',
				value: email
			},
			{
				name: 'password',
				value: password
			}
		]
	}

	try {
		console.log("[INFO]: Saving to cloud store");
		await db.save(entity);
		console.log(`[INFO]: User ${name} created`);
	}
	catch(err){
		console.log(`[ERROR]: ${err}`);
		res.status(500);
	}

	res.status(201);
});

module.exports = router;