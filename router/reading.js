const express = require("express");
const router = express.Router();
const Reading = require("../api/model/reading");
router.use(express.json());
router.get("/", async (req, res) => {
  try {
    const readings = await Reading.find();
    res.json({ readings });
  } catch (error) {
    console.log("get error");
  }
});
router.post("/", async (req, res) => {
  console.log("request recieved");
  console.log(req.body);
  const reading = new Reading({
    distance: req.body.distance,
  });
  try {
    const newReading = await reading.save();
    res.json({ newReading });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
