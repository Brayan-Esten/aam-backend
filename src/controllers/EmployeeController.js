import { validationResult, matchedData } from "express-validator";

import Employee from '../models/Employee.js';
import FindAllEmployeeResponse from '../responses/FindAllEmployeeResponse.js';
import FindOneEmployeeResponse from '../responses/FindOneEmployeeResponse.js';

const findAllEmployee = async (req, res) => {
    try {
        const result = await Employee.findAll();
        return res.status(200).json(new FindAllEmployeeResponse(result));
    } catch (error) {
        console.log(error.message);
        return res.json({
            message: 'Server Error',
            errorMessage: error.message
        });
    }
}

const findOneEmployee = async (req, res) => {
    try {
        const result = await Employee.findOne({
            where: {
                id: req.params.id
            }
        });

        if (result) {
            return res.status(200).json(new FindOneEmployeeResponse(result));
        }

        return res.status(404).json({
            message: 'Record not found'
        });

    } catch (error) {
        console.log(error.message);
        return res.json({
            message: 'Server Error',
            errorMessage: error.message
        });
    }
}

const createEmployee = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            })
        }

        const employee = await Employee.create(matchedData(req));
        return res.status(201).json(new FindOneEmployeeResponse(employee));
    } catch (error) {
        console.log(error.message);
        return res.json({
            message: 'Server Error',
            errorMessage: error.message
        });
    }
}

const updateEmployee = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            })
        }

        const [ isSuccess ] = await Employee.update(matchedData(req), {
            where: {
                id: req.params.id
            },
        });

        if (isSuccess) {
            const employee = await Employee.findOne({
                where: {
                    id: req.params.id
                }
            });

            return res.status(200).json(new FindOneEmployeeResponse(employee));
        }

        return res.status(404).json({
            message: "Record not found"
        });

    } catch (error) {
        console.log(error.message);
        return res.json({
            message: 'Server Error',
            errorMessage: error.message
        });
    }
}

const deleteEmployee = async (req, res) => {
    try {
        const isSuccess = await Employee.destroy({
            where: {
                id: req.params.id
            },
        });

        if (isSuccess) {
            return res.status(200).json({
                message: "Record deleted"
            });
        }

        return res.status(404).json({
            message: "Record not found"
        });

    } catch (error) {
        console.log(error.message);
        return res.json({
            message: 'Server Error',
            errorMessage: error.message
        });
    }
}

export default {
    findAllEmployee,
    findOneEmployee,
    createEmployee,
    updateEmployee,
    deleteEmployee
}