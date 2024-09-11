import jwt from 'jsonwebtoken'
import User from '../models/usermodel.js'

//protected route
export const requireSignIn = async (req, res, next) => {
    try {
        const decode = jwt.verify(req.headers.authorization, process.env.JWT_SECRET_KEY)
        req.user = decode
        next()


    } catch (error) {
        console.log(error)
        
    }
}
//admin route
export const isAdmin = async (req, res, next) => {
    try {
        const user = await User.findById(req.user._id)
        if (user.role !== 1) {
            return res.status(401).send({
                success: false,
                message: "unauthorized access"
            })
        } else {
            next()
        }
    } catch (error) {
        res.json({ message: "error" })

    }
}