const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
 res.send(200, [
    {"id": 1, "email": "qwe@123.com", "password": "1234"}
 ])
});

module.exports=router;