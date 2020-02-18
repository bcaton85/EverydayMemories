const express = require('express');
const router = express.Router();

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

	const db = new Datastore({
		projectId: 'memories-263716',
		keyFilename: './memories-sa.json'
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
		res.status(500).send({status:"failure",message:"Error saving user"});
	}

	res.status(201).send({status:"success"});
});

module.exports = router;