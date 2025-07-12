const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

router.post('/signup', async (req, res) => {
    const { uname, uemail, upassword } = req.body;

    try {
        const existingUser = await User.findOne({ uemail });
        if (existingUser) {
            return res.status(400).json({ error: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(upassword, 10);

        const newUser = new User({ uname, uemail, upassword: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
        console.error("Signup error:", err);
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;
