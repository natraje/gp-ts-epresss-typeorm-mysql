import { Department } from "../entities/dept-entity";
import { getManager } from "typeorm";

export class DeptRepo {

    getDepartments() {
        // get Department repository and find all Department
        return getManager().getRepository(Department).find();
    }

    getDepartment(dept_no: string) {
        // get Department repository and find Department by id
        return getManager().getRepository(Department).findOne({dept_no:dept_no});
    }

    saveDepartment(dept: Department) {
          return getManager().getRepository(Department).save(dept);
    }

    removeDepartment(dept_no: string) {
        getManager().getRepository(Department).delete({ dept_no: dept_no });
    }
}