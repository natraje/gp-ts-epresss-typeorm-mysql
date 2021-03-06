import "reflect-metadata";
import {ConnectionOptions} from "typeorm";
import { Employees } from "../entities/employee-entity";
import { Department } from "../entities/dept-entity";

import { DeptEmployee } from "../entities/deptemp-entity";
import { DeptManager } from "../entities/deptmgr-entity";
import { Salaries } from "../entities/salary-entity";
import { Titles } from "../entities/title-entity";

 export let dbOptions: ConnectionOptions = {
    type: "mysql",
    host: "coding-challenges.ck7pmmaeam7a.us-west-2.rds.amazonaws.com",
    port: 3306,
    username: "user",
    password: "l3XK4^wNVM2o",
    database: "test",
    entities: [Employees,Department,DeptEmployee,DeptManager,Salaries,Titles
        // "./entities/*.js"
    ],
    synchronize: true,
}