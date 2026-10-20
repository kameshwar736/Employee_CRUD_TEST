import mongoose from "mongoose";


const crudSchema = new mongoose.Schema({
    empId : Number,
    empName : String,
    empMobile : Number,
})



const empModel = new mongoose.model("empData",crudSchema)


export default empModel