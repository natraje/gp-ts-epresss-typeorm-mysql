import { Request, Response } from "express";
import { EmployeeRepo } from "../repositories/employee-repository";
import { Employees } from "../entities/employee-entity";

export let getAllEmployees = async (req: Request, res: Response) => {
    let empRepo: EmployeeRepo = new EmployeeRepo();
    console.log("Received GetAllEmployees ==> GET");
    empRepo.getAllEmployees().then((result: any) => {
        console.log("Result : " + result);
        res.send(result);
    });
};

export let getEmployee = async (req: Request, res: Response) => {
    let empRepo: EmployeeRepo = new EmployeeRepo();
    console.log("Received GetEmployee ==> GET");
    empRepo.getEmployee(req.params.emp_no).then((result: any) => {
        console.log("Result : " + result);
        res.send(result);
    });
};

export let getEmployeeByName = async (req: Request, res: Response) => {
    let empRepo: EmployeeRepo = new EmployeeRepo();
    console.log("Received getEmployeeByName ==> GET");
    empRepo.getEmployeeByName(req.params.firstname).then((result: any) => {
        console.log("Result : " + result);
        res.send(result);
    });
};

export let saveEmployee = async (req: Request, res: Response) => {
    let empRepo: EmployeeRepo = new EmployeeRepo();
    console.log("Received SaveEmployee ==> POST");
    console.log(req.body);
    let emp:Employees = new Employees();
    emp.emp_no = req.body.emp_no;
    emp.first_name = req.body.first_name;
    emp.last_name = req.body.last_name;
    emp.gender = req.body.gender;
    emp.birth_date = req.body.birth_date;
    emp.hire_date = req.body.hire_date;
    empRepo.saveEmployee(emp).then((result: any) => {
        console.log("Result : " + result);
        res.send(result);
    });
};

export let removeEmployee = async (req: Request, res: Response) => {
    let empRepo: EmployeeRepo = new EmployeeRepo();
    console.log("Received removeEmployee ==> DELETE");
    console.log(req.body);
    empRepo.removeEmployee(req.params.emp_no);
};