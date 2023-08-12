const { getProductsDb } = require("./product.service");

const getProducts = async (req, res) => {
  const products = await getProductsDb();
  res.send(products);
};

module.exports = { getProducts };