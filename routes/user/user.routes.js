const express = require('express');
const repository = require('../../core/repository/user.repository');
const md5 = require('md5');

const router = express.Router();

router.get('/:email/:password',async (req,res)=>{
    const result = await repository.getByEmailAndPassword(req.params.email,md5(req.params.password));
    res.status(result ? 200 : 400);
    res.json(result);
});

module.exports = router;