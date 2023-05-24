import express from 'express'
const router = express.Router()
import {
    getProductById,
    getProducts,
    createProductReview,
    getTopProducts
} from '../controllers/productController.js'
import { protect ,admin} from '../middleware/authMiddleware.js'




router.route( '/' ).get( getProducts )
router.get('/top',getTopProducts)
router.route( '/:id' ).get( getProductById )

router.route('/:id/reviews').post(protect,createProductReview)

export default router