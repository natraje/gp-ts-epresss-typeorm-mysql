import * as empController from "./controllers/employee-controller";

export const Routes = [{
    method: "get",
    route: "/employees",
    controller: empController,
    action: "getAllEmployees"
}, {
    method: "get",
    route: "/employees/:emp_no",
    controller: empController,
    action: "getEmployee"
}, {
    method: "post",
    route: "/employees",
    controller: empController,
    action: "saveEmployee"
}, {
    method: "delete",
    route: "/employees/:emp_no",
    controller: empController,
    action: "removeEmployee"
}];
/*app.get("/GetAllEmployees", empController.getAllEmployees);
app.get("/GetAllEmployees/:", empController.getAllEmployees);
app.post("/SaveEmployee", empController.saveEmployee); */