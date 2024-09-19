const express = require('express');
const router = express.Router();

const quizData = [
    { question: 'What is the capital of France?', options: ['Paris', 'London', 'Berlin', 'Madrid'], answer: 'Paris' },
    { question: 'What is 2 + 2?', options: ['3', '4', '5', '6'], answer: '4' },
    { question: 'What is the tallest mountain in the world?', options: ['K2', 'Mount Everest', 'Kangchenjunga', 'Lhotse'], answer: 'Mount Everest' },
    { question: 'Who wrote *Hamlet*?', options: ['Charles Dickens', 'J.K. Rowling', 'William Shakespeare', 'Leo Tolstoy'], answer: 'William Shakespeare' },
    { question: 'What is the boiling point of water?', options: ['90°C', '100°C', '110°C', '120°C'], answer: '100°C' },
];

router.get('/quiz', (req, res) => {
    res.render('quiz', { quizData, result: null });
});

router.post('/quiz/submit', (req, res) => {
    const userAnswers = req.body;
    let score = 0;

    quizData.forEach((question, index) => {
        if (userAnswers[`q${index}`] === question.answer) {
            score++;
        }
    });

    res.render('quiz', { quizData, result: `Your score is ${score} out of 5` });
});

module.exports = router;

          
