import express from 'express'

import { createCategory, deletecategory, getCategory, singlecategory, updateCategory } from '../controllers/createcategory.js'
import { isAdmin, requireSignIn } from '../middleware/authmiddleware.js'
const router = express.Router()
//create category
router.post('/createcategory', requireSignIn, isAdmin, createCategory)
//update category
router.put('/update-category/:id', requireSignIn, isAdmin, updateCategory)
//get category
router.get('/getcategory', getCategory)
//single category
router.get('/singlecategory/:id', singlecategory)
//delete category
router.delete('/deletecategory/:id', requireSignIn, isAdmin, deletecategory)


export default router