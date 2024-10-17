import { Router } from "express";
import { prodController } from "../controllers";

const router = Router();

router.get("/product", prodController.getProduct);
router.post("/product", prodController.postProduct);
router.get("/product/total", prodController.getTotalProduct);
router.get("/product/:id", prodController.getProductById);
router.delete("/product/:id", prodController.deleteProductById);
router.put("/product/:id", prodController.putProductById);

export default router;