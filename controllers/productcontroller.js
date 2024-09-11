import Product from "../models/producymodel.js";

//create product 
export const createproduct = async (req, res) => {

    try {
        const body = req.body


        body.photo = req.file ? req.file?.path : null

        const product = new Product(body)
        await product.save()

        res.json({ success: true, message: "product created successfully", product })

    } catch (error) {

        res.json({ success: false, message: "error in creating product" })
    }

}
//get product
export const getProduct = async (req, res) => {

    try {
        const product = await Product.find().sort({ createdAt: -1 })
        res.json({ success: true, product })

    } catch (error) {
        res.json({ success: false, message: "error in getting product" })
    }
}
// find by id


export const singleProduct = async (req, res) => {
    const {id} = req.params
    try {
        
        const product = await Product.findById({ _id:id });
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving product' });
    }
};
//update product
export const updateProduct = async (req, res) => {
    const { id } = req.params
    try {
        const product = await Product.findByIdAndUpdate( id )
        res.json({ success: true, message: "product updated successfully", product })

    } catch (error) {
        res.json({ success: false, message: "error in getting product" })
    }
}
//delete product    
export const deleteProduct = async (req, res) => {
    const { id } = req.params
    try {
        const product = await Product.findByIdAndDelete( id )
        res.json({ success: true, message: "product deleted successfully", })

    } catch (error) {
        res.json({ success: false, message: "error in getting product" })
    }
}