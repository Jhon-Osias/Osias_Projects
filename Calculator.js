const express = require('express');
const router = express.Router();

router.get('/calculator', (req, res) => {
    res.render('calculator', { result: null });
});

router.post('/calculator/calculate', (req, res) => {
    const num1 = parseFloat(req.body.num1);
    const num2 = parseFloat(req.body.num2);

    if (isNaN(num1) || isNaN(num2)) {
        res.render('calculator', { result: 'Please provide valid numbers' });
    } else {
        const sum = num1 + num2;
        const diff = num1 - num2;
        const prod = num1 * num2;
        const quotient = num2 !== 0 ? num1 / num2 : 'Infinity';
        const average = (num1 + num2) / 2;

        const result = {
            sum,
            diff,
            prod,
            quotient,
            average
        };

        res.render('calculator', { result });
    }
});
