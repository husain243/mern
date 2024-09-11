import dotenv from 'dotenv'

//cloudinary middleware
import { v2 as cloudinary } from "cloudinary"
import multer from 'multer'
import { CloudinaryStorage } from "multer-storage-cloudinary"
dotenv.config()
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
})

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "uploads",
        format: async (req, file) => "png",
        public_id: (req, file) => file.originalname.split(".")[0] + ""

    }
})
const fileupload = multer({ storage: storage })
export default fileupload

