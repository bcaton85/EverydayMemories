const express = require('express');
const router = express.Router();

var Message = require('../models/message.js');

router.post('/submit', async (req, res)=>{

	console.log(req.body);
	const messageText = req.body.messageText;
	const userId = req.body.userId;
	const submissionDate = req.body.submissionDate;

	// Sanitation
	if(!messageText){
		return res.status(400).send('Invalid request body');
	}
	
	if(!userId){
		return res.status(400).send('Invalid request body');
	}

	if(!submissionDate){
		return res.status(400).send('Invalid request body');
	}

	var message = new Message({userId: userId, messageText:messageText,submissionDate:submissionDate});

	message.save(function(err,message){
		if(err) {
			//TODO: handle err
			console.log(err);
			return;
		}
		res.status(201).send({success:true});
	});

});

router.post('/', async (req, res)=>{
	console.log(req.body);
	const userId = req.body.userId;

	const responseBody = {success:false};

	if(!userId){
		return res.status(400).send('Invalid request body'); 
	}

	Message.find({userId:userId}, (err,dbRes)=>{
		if(err){
			res.status(500).send();
		}

		responseBody.success = true;
		responseBody.messages = dbRes;

		console.log(dbRes);
		res.status(200).send(responseBody);
	});
});

module.exports = router;