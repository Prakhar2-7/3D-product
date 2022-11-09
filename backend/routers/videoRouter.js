const express = require('express');
const router = express.Router();

router.get('/add', (req, res) => {
    res.send('Response from add video router');
})

router.get('/getall', (req, res) => {
    res.send('Response from getall');
})

module.exports = router;