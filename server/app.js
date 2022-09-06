const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const PORT = 3001;

const list = [];
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/api",(req,res) => {
    res.json(list);
  });

app.post("/api", (req, res) => {
  const { image, text } = req.body;

  if (image && text) {
    const newPost = {
      id: Date.now(),
      image,
      text,
    };
    list.push(newPost);
    return res.status(201).json(newPost);
  }
  return res.sendStatus(406);
});

app.listen(PORT, () => console.log("Сервер загрузился", PORT));
