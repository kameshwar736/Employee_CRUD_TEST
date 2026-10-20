import mongoose from "mongoose"

import empModel from "../Models/crudModel.js"





export const createEmployee = async (req, res) => {
    try {
        const { empId, empName, empMobile } = req.body

        if (!empId || !empName || !empMobile) {
            res.status(404).json({ msg: "Invalid Fill the Empty feild" })
            return
        }


        const checkEmpId = await empModel.findOne({ empId: empId })

        console.log(checkEmpId);


        if (checkEmpId) {
            res.status(404).json({ msg: "this id is already been used" })
            return
        }


        await empModel.create({ empId: empId, empName: empName, empMobile: empMobile })

        const findMongoEmp = await empModel.findOne({ empId: empId })

        res.status(201).json({ msg: "Data Added Sucess", empDetail: findMongoEmp })

        return

    } catch (error) {
        console.error("Actual error:", error);
        return res.status(500).json({
            msg: "Something went wrong",
            error: error.message
        });
    }
}





export const deleteEmployee = async (req, res) => {
    try {
        const { empId } = req.params

        if (!empId) {
            res.status(404).json({ msg: "no Id found" })
            return
        }


        const findEmp = await empModel.findOne({ empId })

        if (!findEmp) {
            res.status(404).json({ msg: "no User FOund" })
            return
        }

        await empModel.findOneAndDelete({ empId })


        res.status(200).json({ msg: "emp Deleted Sucess" })

        return

    } catch (error) {
        console.error("Actual error:", error);
        return res.status(500).json({
            msg: "Something went wrong",
            error: error.message
        });

    }
}



export const updateEmployee = async (req, res) => {
    try {
        const { _id } = req.params

        const { empId, empName, empMobile } = req.body




        if (!_id || !empName || !empMobile || !empId) {
            res.status(404).json({ msg: "Invalid Fill the Empty feild" })
            return
        }


        const CheckEmp = await empModel.findById({ _id })


        if (!CheckEmp) {
            res.status(404).json({ msg: "no Id found" })
            return
        }

        await empModel.findByIdAndUpdate(_id, { empId, empName, empMobile }, { new: true })

        res.status(200).json({ msg: "Updated sucess fully" })

        return

    } catch (error) {

        console.error("Actual error:", error);
        return res.status(500).json({
            msg: "Something went wrong",
            error: error.message
        });

    }
}




export const readEmployee = async (req, res) => {
    try {

        const getAll = await empModel.find()

        res.status(200).json({ msg: "Fetched", empData: getAll })
        return
    } catch (error) {
        console.error("Actual error:", error);
        return res.status(500).json({
            msg: "Something went wrong",
            error: error.message
        });

    }
}