const express = require('express');
const router = express.Router();
const { Datastore } = require('@google-cloud/datastore');

router.post('/message', async (req, res)=>{
    const message = req.body.message;

	// Sanitation
	if(!message){
		return res.status(400).send('Invalid request body');
	}

	const db = new Datastore({
		projectId: 'memories-263716',
		keyFilename: './memories-sa.json'
	});

	const key = db.key('Memory');

	const entity = {
		key: key,
		data: [
			{
				name: 'message',
				value: message
			}
		]
	}

	try {
		await db.save(entity);
	}
	catch(err){
		console.log(`[ERROR]: ${err}`);
		res.status(500);
	}

	res.status(201).send({status:"success"});
});

module.exports = router;