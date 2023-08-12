const Product = require("./porduct.model");


const getProductsDb = async () => {
  const products = await Product.find();
  return products;
};


module.exports = { getProductsDb };