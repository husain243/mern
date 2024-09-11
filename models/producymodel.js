import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, require: true },
    categories: { type:mongoose.Schema.Types.ObjectId, ref: 'Category', require: true },
    price: { type: Number, require: true },
   
    quantity: { type: Number, require: true },
    photo: {  type: String, require: true },    
    

}, { timestamps: true })

export default mongoose.model('Product', productSchema)