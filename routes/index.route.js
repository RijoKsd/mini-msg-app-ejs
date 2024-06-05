const router = require("express").Router();
const Message = require("../model/message.model");

router.get("/", async (req, res) => {
  const messages = await Message.find().sort({ createdAt: -1 });
  let date = new Date();
  res.render("index", { title: "Mini Message board", messages: messages });
});

router.get("/new", (req, res) => {
  res.render("form", { title: "Mini Message board" });
});

router.post("/new",async (req, res) => {
  const { name, message } = req.body;
  try {
    const newMessage = new Message({ name, message });
    await newMessage.save();
    res.redirect("/");
  } catch (err) {
    console.log(err.message);
  }
 });

module.exports = router;
