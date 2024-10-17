import { Product } from "../models/Product";
import { ProdFields } from "../database/database";

export const getProduct = async (req, res) => {
  try {
    const product = await Product.findAll();
    res.json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const postProduct = async (req, res) => {
  const { ...prod } = req.body;
  try {
    let newProduct = await Product.create(
      {
        ...prod,
      },
      {
        fields: ProdFields,
      }
    );
    return res.json(newProduct);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
  res.json("received");
};

export const getProductById = async (req, res) => {
  const { id: prodId } = req.params;
  try {
    const product = await Product.findOne({
      where: {
        prodId,
      },
    });
    res.json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteProduct = async (req, res) => {
  const { id: prodId } = req.params;
  try {
    await Product.destroy({
      where: {
        prodId,
      },
    });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const putProductById = async (req, res) => {
  try {
    const { id: prodId } = req.params;
    const { ...prod } = req.body;

    const product = await Product.findByPk(prodId);
    if (!product) {
      return res.json({ message: "already exists" });
    }

    await prod.save();
    res.json(ci);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
