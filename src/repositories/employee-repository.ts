import { Employees } from "../entities/employee-entity";
import { getManager } from "typeorm";
//import {Like} from "typeorm";

export class EmployeeRepo {

    getAllEmployees() {
        // get Employee repository and find all employees
        return getManager().getRepository(Employees).find();
    }

    getEmployee(emp_no: number) {
        // get Employee repository and find employee by id
        return getManager().getRepository(Employees).findOne({emp_no:emp_no});
    }

   getEmployeeByName(firstName: string) {
        // get Employee repository and find employee by id
        //return getManager().getRepository(Employees).find({first_name: Like(`%${firstName}%`)});
        return getManager().getRepository(Employees).createQueryBuilder("emp").where("user.first_name like %:name%", {name: firstName }).getMany();
    }

    saveEmployee(employee: Employees) {
          return getManager().getRepository(Employees).save(employee);
    }

    removeEmployee(emp_no: number) {
       // let userToRemove = this.getEmployee(emp_no);
        getManager().getRepository(Employees).delete({ emp_no: emp_no });
    }
}