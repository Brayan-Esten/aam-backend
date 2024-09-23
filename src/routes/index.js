import { Router } from "express";
import employeeRouter from "./EmployeeRoute.js";

const router = Router();

router.use(employeeRouter);


export default router;