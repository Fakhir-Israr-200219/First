const studentModel = require("../Models/student.model");
const asyncHandler = require("express-async-handler");
const {ObjectId } = require("mongodb");

const getAllStudent = asyncHandler(async (req, res) => {
    const student = await studentModel.find();
    res.status(200).json(student);
})

const getStudentById = asyncHandler(async(req,res)=>{
    const student = await studentModel.findById(req.params.id);
    if(!student){
        res.status(404);
        throw new Error("student not found");
    }
    res.status(200).json(student)
})

const addStudent = asyncHandler(async (req, res) => {
    const { name, rollNumber, email, phone } = req.body;
    if (!email) {
        return res.status(400).json({ message: "Email is required" });
    }
    const student = await studentModel.create({
        name, 
        rollNumber, 
        email, 
        phone
    })
    res.status(201).json(student);
})
const updateStudent = asyncHandler(async(req,res)=>{
   
    const student = await studentModel.findById(req.params.id);
    if(!student){
        res.status(404);
        throw new Error("Student not found")
    }
    const updateStudent = await studentModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.status(200).json(updateStudent);

})
const deleteStudent = asyncHandler(async(req,res)=>{
  
    const student = await studentModel.findById(req.params.id);
    if(!student){
        res.status(404);
        throw new Error("can not find student");
    }
    await studentModel.deleteOne(new ObjectId(req.params.id));
    res.status(200).json(student);

})

module.exports = {
    getAllStudent,
    addStudent,getStudentById,updateStudent,deleteStudent
}