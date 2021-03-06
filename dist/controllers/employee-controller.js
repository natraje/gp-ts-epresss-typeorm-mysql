"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeEmployee = exports.saveEmployee = exports.getEmployeeByName = exports.getEmployee = exports.getAllEmployees = void 0;
const employee_repository_1 = require("../repositories/employee-repository");
const employee_entity_1 = require("../entities/employee-entity");
let getAllEmployees = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let empRepo = new employee_repository_1.EmployeeRepo();
    console.log("Received GetAllEmployees ==> GET");
    empRepo.getAllEmployees().then((result) => {
        console.log("Result : " + result);
        res.send(result);
    });
});
exports.getAllEmployees = getAllEmployees;
let getEmployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let empRepo = new employee_repository_1.EmployeeRepo();
    console.log("Received GetEmployee ==> GET");
    empRepo.getEmployee(req.params.emp_no).then((result) => {
        console.log("Result : " + result);
        res.send(result);
    });
});
exports.getEmployee = getEmployee;
let getEmployeeByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let empRepo = new employee_repository_1.EmployeeRepo();
    console.log("Received getEmployeeByName ==> GET");
    empRepo.getEmployeeByName(req.params.firstname).then((result) => {
        console.log("Result : " + result);
        res.send(result);
    });
});
exports.getEmployeeByName = getEmployeeByName;
let saveEmployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let empRepo = new employee_repository_1.EmployeeRepo();
    console.log("Received SaveEmployee ==> POST");
    console.log(req.body);
    let emp = new employee_entity_1.Employees();
    emp.emp_no = req.body.emp_no;
    emp.first_name = req.body.first_name;
    emp.last_name = req.body.last_name;
    emp.gender = req.body.gender;
    emp.birth_date = req.body.birth_date;
    emp.hire_date = req.body.hire_date;
    empRepo.saveEmployee(emp).then((result) => {
        console.log("Result : " + result);
        res.send(result);
    });
});
exports.saveEmployee = saveEmployee;
let removeEmployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let empRepo = new employee_repository_1.EmployeeRepo();
    console.log("Received removeEmployee ==> DELETE");
    console.log(req.body);
    empRepo.removeEmployee(req.params.emp_no);
});
exports.removeEmployee = removeEmployee;
//# sourceMappingURL=employee-controller.js.map