const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send({'data': 'hello'});
});

module.exports = router;