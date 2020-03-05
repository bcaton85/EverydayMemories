const express = require('express');
const authRouter = require('./auth-routes');
const subRouter = require('./submission-routes');
const healthcheckRouter = require('./healthcheck-routes');

const router = express.Router();

router.get('/', (req, res)=>{
	res.send("ready");
});

router.use('/auth', authRouter);
router.use('/sub',subRouter);
router.use('/healthcheck', healthcheckRouter);

module.exports = router;
