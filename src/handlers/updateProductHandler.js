const { updateProduct } = require("../controllers/updateProduct");

const updateProductHandler = async (req, res) => {
  const {
    id,
    name,
    description,
    descriptionDetail,
    price,
    stockXS,
    stockS,
    stockM,
    stockL,
    stockXL,
    stockXXL,
    stock,
    image,
    size,
    sold,
    CategoryId,
  } = req.body;
  try {
    const updatedProduct = await updateProduct(
      id,
      name,
      description,
      descriptionDetail,
      price,
      stockXS,
      stockS,
      stockM,
      stockL,
      stockXL,
      stockXXL,
      stock,
      image,
      size,
      sold,
      CategoryId
    );
    return res.status(200).json({ message: `Producto actualizado con éxito`});
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = { updateProductHandler };
