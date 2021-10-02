const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send({'data': 'hello'});
});

router.get('/post', (req, res) => {
    res.send({'post': "app create"})
});
module.exports = router;