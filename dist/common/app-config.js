"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbOptions = void 0;
require("reflect-metadata");
const employee_entity_1 = require("../entities/employee-entity");
const dept_entity_1 = require("../entities/dept-entity");
const deptemp_entity_1 = require("../entities/deptemp-entity");
const deptmgr_entity_1 = require("../entities/deptmgr-entity");
const salary_entity_1 = require("../entities/salary-entity");
const title_entity_1 = require("../entities/title-entity");
exports.dbOptions = {
    type: "mysql",
    host: "coding-challenges.ck7pmmaeam7a.us-west-2.rds.amazonaws.com",
    port: 3306,
    username: "user",
    password: "l3XK4^wNVM2o",
    database: "test",
    entities: [employee_entity_1.Employees, dept_entity_1.Department, deptemp_entity_1.DeptEmployee, deptmgr_entity_1.DeptManager, salary_entity_1.Salaries, title_entity_1.Titles
        // "./entities/*.js"
    ],
    synchronize: true,
};
//# sourceMappingURL=app-config.js.map