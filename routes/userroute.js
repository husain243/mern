import express from 'express'
import { Login, register, test } from '../controllers/usercontrollers.js'
import { isAdmin, requireSignIn } from '../middleware/authmiddleware.js'

const router = express.Router()
// register
router.post('/register', register)
//login
router.post('/login', Login)
//test
router.get('/test', requireSignIn, test)
// auth route
router.get('/user-auth', requireSignIn,(req, res) => {
    res.json({ ok: true });
})
///admin route
router.get('/admin-auth', requireSignIn,isAdmin,(req, res) => {
    res.json({ ok: true });
})
export default router