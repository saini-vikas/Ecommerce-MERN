import express from "express";
const router = express.Router();
import Product from "./../Database/models.js";

router.get("/", async (req, res) => {
  const q = req.query;
  const limit = q.limit;
  const skip = q.page;
  const onsale = q.onsale;
  if (onsale) {
    const product = await Product.find({ onsale: onsale })
      .skip(limit * (skip - 1))
      .limit(limit)
      .exec();
    res.status(200).json(product);
  } else {
    const product = await Product.find()
      .skip(limit * (skip - 1))
      .limit(limit)
      .exec();
    res.status(200).json(product);
  }
});

router.get("/count", async (req, res) => {
  const q = req.query;
  const onsale = q.onsale;
  if (onsale) {
    const count = await Product.countDocuments({ onsale: onsale });
    res.status(200).json({ count: count });
  } else {
    const count = await Product.countDocuments();
    res.status(200).json({ count: count });
  }
});

export default router;
