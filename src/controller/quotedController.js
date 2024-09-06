const Quoted = require("../Models/quotedModel");

const createQuotes = async (req, res) => {
  const { productId } = req.body;
  try {
    const quotes = new Quoted({
      productId,
    });
    const createdQuotes = await quotes.save();
    res.status(201).json(createdQuotes);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating quotes", error: error.message });
  }
};
module.exports = { createQuotes };
