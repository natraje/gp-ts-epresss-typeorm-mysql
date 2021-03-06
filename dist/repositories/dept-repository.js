"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeptRepo = void 0;
const dept_entity_1 = require("../entities/dept-entity");
const typeorm_1 = require("typeorm");
class DeptRepo {
    getDepartments() {
        // get Department repository and find all Department
        return typeorm_1.getManager().getRepository(dept_entity_1.Department).find();
    }
    getDepartment(dept_no) {
        // get Department repository and find Department by id
        return typeorm_1.getManager().getRepository(dept_entity_1.Department).findOne({ dept_no: dept_no });
    }
    saveDepartment(dept) {
        return typeorm_1.getManager().getRepository(dept_entity_1.Department).save(dept);
    }
    removeDepartment(dept_no) {
        typeorm_1.getManager().getRepository(dept_entity_1.Department).delete({ dept_no: dept_no });
    }
}
exports.DeptRepo = DeptRepo;
//# sourceMappingURL=dept-repository.js.map