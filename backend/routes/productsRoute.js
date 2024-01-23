import express  from "express";
import { deleteProduct, getProductDetails, getProducts, newProducts, updateProduct } from "../controllers/productsController.js";

const router = express.Router();

router.route("/products").get(getProducts);
router.route("/admin/products").post(newProducts);
router.route("/products/:id").get(getProductDetails);
router.route("/products/:id").put(updateProduct);
router.route("/products/:id").delete(deleteProduct);


export default router;