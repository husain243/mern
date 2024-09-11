import express from 'express'
const router = express.Router()
import { isAdmin, requireSignIn } from '../middleware/authmiddleware.js'
import { createproduct, deleteProduct, getProduct, singleProduct, updateProduct } from '../controllers/productcontroller.js'
import fileupload from '../middleware/cloudinary.js'



//create router
router.post('/createproduct', fileupload.single("photo"),requireSignIn,isAdmin, createproduct)

//get product
router.get('/getproduct', getProduct)
//get  by id 
router.get('/:id', singleProduct)
//update router
router.put('/:id', requireSignIn, isAdmin, updateProduct)
//delete router
router.delete('/:id', deleteProduct)


export default router