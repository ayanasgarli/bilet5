let express = require("express");
let app = express();
let cors = require("cors");
let bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { Schema } = require("mongoose");
app.use(cors());
app.use(bodyParser.json());
require("dotenv").config();
let port = process.env.PORT;
app.use(express.json());

// Schemas
const ClothesSchema = new Schema({
  name: String,
  price: Number,
  image: String,
});
const Clothes = mongoose.model("Clothes", ClothesSchema);

app.get("/api/clothes", async (req, res) => {
  let clothes = await Clothes.find();
  if (Clothes.length > 0) {
    res.send(clothes);
  } else {
    res.send("Data not found");
  }
});

app.get("/api/clothes/:id", async (req, res) => {
  let { id } = req.params;
  let findedCloth = await Clothes.findById(id);
  if (findedCloth) {
    res.send(findedCloth);
  } else {
    res.send("Data not found");
  }
});

app.delete("/api/clothes/:id", async (req, res) => {
  let { id } = req.params;
  let deletedCloth = await Clothes.findByIdAndDelete(id);
  if (deletedCloth) {
    res.send(deletedCloth);
  } else {
    res.send("Data not found");
  }
});
app.post("/api/clothes", async (req, res) => {
  let { name, price, image } = req.body;
  let newData = {};
  if (name) {
    newData.name = name;
  }
  if (price) {
    newData.price = price;
  }
  if (image) {
    newData.image = image;
  }
  let newCloth = new Clothes(newData);

  let savedCloth = await newCloth.save();
  res.send(savedCloth);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

mongoose
  .connect(
    process.env.DB_CONNECTION_KEY.replace("Aa1234", process.env.DB_PASSWORD)
  )
  .then(() => console.log("Connected!"));
