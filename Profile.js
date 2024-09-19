const express = require('express');
const router = express.Router();

// Profile data
const profiles = [
    {
        name: "Jhon Valdwin Osias",
        description: "A third-year BSIT student at City of Malabon University, focused on developing efficient back-end solutions using Express.js. His passion for coding drives him to continuously improve his skills in web development."
    },
    {
        name: "Carmina D Odtujan",
        description: "Also a third-year BSIT student at City of Malabon University, she brings a keen eye for detail to the project, ensuring smooth integration of design elements with functionality in Express.js. She enjoys tackling challenges in web development with creative solutions."
    }
];

// Route to render the profiles
router.get('/profiles', (req, res) => {
    res.render('profiles', { profiles });
});

module.exports = router;

