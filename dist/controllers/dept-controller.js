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
exports.removeDepartment = exports.saveDepartment = exports.getDepartment = exports.getDepartments = void 0;
const dept_repository_1 = require("../repositories/dept-repository");
const dept_entity_1 = require("../entities/dept-entity");
let getDepartments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let deptRepo = new dept_repository_1.DeptRepo();
    console.log("Received getDepartments ==> GET");
    deptRepo.getDepartments().then((result) => {
        console.log("Result : " + result);
        res.send(result);
    });
});
exports.getDepartments = getDepartments;
let getDepartment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let deptRepo = new dept_repository_1.DeptRepo();
    console.log("Received getDepartment ==> GET");
    deptRepo.getDepartment(req.params.dept_no).then((result) => {
        console.log("Result : " + result);
        res.send(result);
    });
});
exports.getDepartment = getDepartment;
let saveDepartment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let deptRepo = new dept_repository_1.DeptRepo();
    console.log("Received saveDepartment ==> POST");
    console.log(req.body);
    let dept = new dept_entity_1.Department();
    dept.dept_no = req.body.dept_no;
    dept.dept_name = req.body.dept_name;
    deptRepo.saveDepartment(dept).then((result) => {
        console.log("Result : " + result);
        res.send(result);
    });
});
exports.saveDepartment = saveDepartment;
let removeDepartment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let deptRepo = new dept_repository_1.DeptRepo();
    console.log("Received removeDepartment ==> DELETE");
    console.log(req.body);
    deptRepo.removeDepartment(req.params.dept_no);
});
exports.removeDepartment = removeDepartment;
//# sourceMappingURL=dept-controller.js.map