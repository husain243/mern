import bcrypt from 'bcryptjs'
import User from '../models/usermodel.js'
import jwt from 'jsonwebtoken'


//register 
export const register = async (req, res) => {
    const { name, email, password } = req.body
    try {
        const exits = await User.findOne({ email })
        if (exits) return res.json({ message: "user already exits", success: false })
        const hashPass = await bcrypt.hash(password, 10)
        const user = await User({
            name, email, password: hashPass
        })
        await user.save()
        res.json({ message: "user created successfully!", success: true, user })

    } catch (error) {
        res.json({ message: "error in register", success: false })

    }

}
//Login
export const Login = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email })
        if (!user) return res.json({ message: "user not found", success: false })
        const validPass = await bcrypt.compare(password, user.password)
        if (!validPass) return res.json({ message: "invalid credentials", success: false })
        const token = await jwt.sign({ _id: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: "2h" })

        res.json({
            message: "Login successfully", success: true, user: {
                name: user.name,
                email: user.email,
                role: user.role,
                
            },token
        })
    } catch (error) {
        res.json({ mesage: "error in login", success: false })
    }
}
//test controllers
export const test = async (req, res) => {
    res.json({ message: "private route" })
}