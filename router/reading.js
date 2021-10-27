const express = require("express");
const router = express.Router();
const Reading = require("../api/model/reading");

router.get("/", async (req, res) => {
  try {
    const readings = await Reading.find();
    res.json({ readings });
  } catch (error) {
    console.log("get error");
  }
});
router.post("/", async (req, res) => {
  const reading = new Reading({
    distance: req.body.distance,
  });
  try {
    const newReading = await reading.save();
    res.json({ newReading });
  } catch (error) {
    console.log("post error");
  }
});

module.exports = router;
