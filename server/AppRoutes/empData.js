import express from "express";
import { createEmployee, deleteEmployee, readEmployee, updateEmployee } from "../AppController/empController.js";


const routes = express.Router()


// http://localhost:5000/emp/newEmp         - create
routes.post('/newEmp',createEmployee)

// http://localhost:5000/emp/removeEmp/:userId          - delete
routes.delete('/removeEmp/:empId',deleteEmployee)

// http://localhost:5000/emp/updateEmp/:userId          - update
routes.put('/updateEmp/:_id',updateEmployee)            

// http://localhost:5000/emp/getAllEmployee             - read 
routes.get('/getAllEmployee',readEmployee)



export default routes