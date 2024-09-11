import Category from '../models/categorymodel.js'
export const createCategory = async (req, res) => {
    const { name } = req.body
    try {
        const exixts = await Category.findOne({ name })
        if (exixts) return res.json({ message: "Category already exits", success: false })
        const category = new Category({ name })
        await category.save()
        res.json({ message: "Category created successfully", success: true })

    } catch (error) {
        res.json({ message: "Error in creating category", success: false })
    }
}
//update caregory
export const updateCategory = async (req, res) => {
    const { name } = req.body

    try {
        const { id } = req.params
        const category = await Category.findByIdAndUpdate(id, { name }, { new: true })
        res.json({ message: "Category updated successfully", success: true, category })
    } catch (error) {
        res.json({ message: "Error in updating category", success: false })
    }

}
export const getCategory = async (req, res) => {
    try {
        const category = await Category.find()
        res.json({ message: "Category get successfully", success: true, category })

    } catch (error) {
        res.json({ message: "Error in getting category", success: false })
    }
}
export const singlecategory = async (req, res) => {
    const { name } = req.body

    try {
        const { id } = req.params
        const category = await Category.findById(id, { name })
        res.json({ message: "get single Category successfully", success: true, category })
    } catch (error) {
        res.json({ message: "Error in updating category", success: false })
    }

}
//delete category
export const deletecategory = async (req, res) => {
    const { name } = req.body

    try {
        const { id } = req.params
        const category = await Category.findByIdAndDelete(id, { name })
        res.json({ message: "Category deleted successfully!", success: true, category })
    } catch (error) {
        res.json({ message: "Error in updating category", success: false })
    }

}