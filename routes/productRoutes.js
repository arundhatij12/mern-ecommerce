import express from "express";
import {
  createProductController, 
  getProductController,
   getSingleProductController,
   productPhotoController,
   deleteProductController,
   updateProductController,
    productFiltersController,
    productCountController,
     productListController,
     searchProductController,
     relatedProductController,
     productCategoryController

} from "../controllers/productController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";

const router = express.Router();

//routes
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

//get products
router.get("/get-product", getProductController);

// //single product
router.get("/get-product/:slug", getSingleProductController);

// //get photo
router.get("/product-photo/:pid", productPhotoController);

// //delete rproduct
router.delete("/delete-product/:pid", deleteProductController);

//update routes
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

//filter product

router.post('/product-filters', productFiltersController)

router.get('/product-count', productCountController)

router.get('/product-list/:page', productListController)

router.get('/search/:keyword', searchProductController)

router.get('/related-product/:pid/:cid', relatedProductController)

router.get('/product-category/:slug', productCategoryController)

export default router;