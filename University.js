const express = require('express');
const router = express.Router();

router.get('/coreValues', (req, res) => {
    res.render('coreValues', {
        title: 'City of Malabon University Core Values'
    });
});

module.exports = router;


