const express = require("express");
const router = express.Router();
const Chat = require("../schemas/chat");

function num(date) {
    if (date > 9) {
        return date;
    } else {
        return "0" + date;
    }
}
function time() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
    return `${year}.${num(month)}.${num(date)} ${num(hour)}:${num(
        minute
    )}:${num(second)}`;
}

router
    .route("/")
    .get(async (req, res) => {
        try {
            const chats = await Chat.find({}).sort("id");
            res.json({ chats: chats });
        } catch (err) {
            console.error(err);
        }
    })
    .post(async (req, res) => {
        try {
            const chatting = await Chat.create({
                id: Date.now(),
                userId: req.body.userId,
                time: time(),
                chatContent: req.body.chatContent,
                ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress
            });
            res.status(201).json(chatting);
        } catch (err) {
            console.error(err);
        }
    });

router
	.route("/:id")
	.delete(async (req, res, next) => {
		try {
			const chatting = await Chat.remove({ _id: req.params.id });
			res.json(chatting);
		} catch (err) {
			console.error(err);
			next(err);
		}
	})
	.get( async(req, res) => {
		try{
			const newChat = await Chat.find({id: {$gt: req.params.id}}).sort('id')
			await console.log(req.params.id)
			await console.log(newChat)
			res.json({chats: newChat});
		}catch(err){
			console.error(err);
		}
	})

module.exports = router;
