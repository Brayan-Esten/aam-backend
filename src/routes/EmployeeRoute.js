import { Router } from "express";
import { checkSchema } from "express-validator";
import EmployeeController from "../controllers/EmployeeController.js";
import CreateEmployeeRequest from "../requests/CreateEmployeeRequest.js";
import UpdateEmployeeRequest from "../requests/UpdateEmployeeRequest.js";

const router = Router();

router.get('/api/employee/find-all', EmployeeController.findAllEmployee);
router.get('/api/employee/find-one/:id', EmployeeController.findOneEmployee);
router.post('/api/employee/create', checkSchema(CreateEmployeeRequest), EmployeeController.createEmployee);
router.patch('/api/employee/:id/update', checkSchema(UpdateEmployeeRequest) , EmployeeController.updateEmployee);
router.delete('/api/employee/:id/delete', EmployeeController.deleteEmployee);

export default router;