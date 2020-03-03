const express = require('express');
const router = express.Router();

router.post('/message', async (req, res)=>{
    const message = req.body.message;

	// Sanitation
	if(!message){
		return res.status(400).send('Invalid request body');
	}

	


	res.status(201).send({status:"success"});
});

module.exports = router;