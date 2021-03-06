"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeRepo = void 0;
const employee_entity_1 = require("../entities/employee-entity");
const typeorm_1 = require("typeorm");
//import {Like} from "typeorm";
class EmployeeRepo {
    getAllEmployees() {
        // get Employee repository and find all employees
        return typeorm_1.getManager().getRepository(employee_entity_1.Employees).find();
    }
    getEmployee(emp_no) {
        // get Employee repository and find employee by id
        return typeorm_1.getManager().getRepository(employee_entity_1.Employees).findOne({ emp_no: emp_no });
    }
    getEmployeeByName(firstName) {
        // get Employee repository and find employee by id
        //return getManager().getRepository(Employees).find({first_name: Like(`%${firstName}%`)});
        return typeorm_1.getManager().getRepository(employee_entity_1.Employees).createQueryBuilder("emp").where("user.first_name like %:name%", { name: firstName }).getMany();
    }
    saveEmployee(employee) {
        return typeorm_1.getManager().getRepository(employee_entity_1.Employees).save(employee);
    }
    removeEmployee(emp_no) {
        // let userToRemove = this.getEmployee(emp_no);
        typeorm_1.getManager().getRepository(employee_entity_1.Employees).delete({ emp_no: emp_no });
    }
}
exports.EmployeeRepo = EmployeeRepo;
//# sourceMappingURL=employee-repository.js.map