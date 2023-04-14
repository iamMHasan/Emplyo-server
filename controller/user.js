const Employee = require("../model/userModel")

exports.createEmployee = async (req, res)=>{
    const data = req.body 
    try {
        const result = await Employee.create(data)
        res.status(200).json(result)
    } catch (err) {
        res.status(400).json({
            message : "something is wrong",
            error : err.message
        })
    }
}
exports.getEmployee = async (req, res)=>{
    try {
        const result = await Employee.find({})
        res.status(200).json(result)
    } catch (err) {
        res.status(400).json({
            message : "something is wrong",
            error : err.message
        })
    }
}
exports.getSingleEmployee = async (req, res)=>{
    const {id} = req.params
    try {
        const result = await Employee.findById(id)
        res.status(200).json(result)
    } catch (err) {
        res.status(400).json({
            message : "something is wrong",
            error : err.message
        })
    }
}
exports.deleteEmployee = async (req, res)=>{
    const {id} = req.params 
    try {
        const result = await Employee.findByIdAndDelete(id)
        res.status(200).json(result)
    } catch (err) {
        res.status(400).json({
            message : "something is wrong",
            error : err.message
        })
    }
}
exports.updateEmployee = async (req, res)=>{
    const {id} = req.params 
    const data = req.body 
    try {
        const existingEmployee = await Employee.findById(id)
        if (!existingEmployee) {
            return res.status(404).json({ message: 'Employee not found' });
          }

        const result = await Employee.findByIdAndUpdate(id, data)
        res.status(200).json(result)
    } catch (err) {
        res.status(400).json({
            message : "something is wrong",
            error : err.message
        })
    }
}
