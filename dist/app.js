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
const express = require("express");
const bodyParser = require("body-parser");
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const appConfig = require("./common/app-config");
//import {Routes} from "./routes";
/**
 * Controllers (route handlers).
 */
const empController = require("./controllers/employee-controller");
const deptController = require("./controllers/dept-controller");
/**
 * Create Express server.
 */
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
/**
 * Express configuration.
 */
app.set("port", process.env.PORT || 3000);
/**
 * Start Express server.
 */
app.listen(app.get("port"), () => {
    console.log(("  App is running at http://localhost:%d in %s mode"), app.get("port"), app.get("env"));
    console.log("  Press CTRL-C to stop\n");
});
/**
 * Primary app routes.
 */
app.get("/employees", empController.getAllEmployees);
app.get("/employees/:emp_no", empController.getEmployee);
app.get("/employees/name?firstname=:name", empController.getEmployeeByName);
app.post("/employees", empController.saveEmployee);
app.delete("/employees/:emp_no", empController.removeEmployee);
app.get("/departments", deptController.getDepartments);
app.get("/departments/:dept_no", deptController.getDepartment);
app.post("/departments", deptController.saveDepartment);
app.delete("/departments/:dept_no", deptController.removeDepartment);
/*app.get("/GetAllEmployees", empController.getAllEmployees);
app.get("/GetAllEmployees/:", empController.getAllEmployees);
app.post("/SaveEmployee", empController.saveEmployee);*/
// register express routes from defined application routes
/* Routes.forEach(route => {
     (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
         const result = (new (route.controller as any))[route.action](req, res, next);
         if (result instanceof Promise) {
             result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

         } else if (result !== null && result !== undefined) {
             res.json(result);
         }
     });
 }); */
/**
 * Create connection to DB using configuration provided in
 * appconfig file.
 */
typeorm_1.createConnection(appConfig.dbOptions).then((connection) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Connected to DB");
})).catch(error => console.log("TypeORM connection error: ", error));
module.exports = app;
//# sourceMappingURL=app.js.map