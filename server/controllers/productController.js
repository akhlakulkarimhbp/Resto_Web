const Product = require('./../model/productModel');

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json({
      "products": products
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = getProducts;