const express = require('express');
const user = require('../../core/dto/user/user');

const router = express.Router();

router.get('/:email/:password',(req,res)=>{
    const result = user.login(req.params.email,req.params.password);
    res.status(result ? 200 : 400);
    res.json(result);
});

module.exports = router; b