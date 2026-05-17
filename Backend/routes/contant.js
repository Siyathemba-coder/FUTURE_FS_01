const express = require("express");
const router = express.Router();

const Message = require("../models/Message");

router.post("/", async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        const newMessage = new Message({
            name,
            email,
            subject,
            message
        });

        await newMessage.save();

        res.status(200).json({
            success: true,
            message: "Message saved successfully"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
});

module.exports = router;
