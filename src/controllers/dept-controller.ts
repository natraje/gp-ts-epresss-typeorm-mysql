import { Request, Response } from "express";
import { DeptRepo } from "../repositories/dept-repository";
import { Department } from "../entities/dept-entity";

export let getDepartments = async (req: Request, res: Response) => {
    let deptRepo: DeptRepo = new DeptRepo();
    console.log("Received getDepartments ==> GET");
    deptRepo.getDepartments().then((result: any) => {
        console.log("Result : " + result);
        res.send(result);
    });
};

export let getDepartment = async (req: Request, res: Response) => {
    let deptRepo: DeptRepo = new DeptRepo();
    console.log("Received getDepartment ==> GET");
    deptRepo.getDepartment(req.params.dept_no).then((result: any) => {
        console.log("Result : " + result);
        res.send(result);
    });
};

export let saveDepartment = async (req: Request, res: Response) => {
    let deptRepo: DeptRepo = new DeptRepo();
    console.log("Received saveDepartment ==> POST");
    console.log(req.body);
    let dept:Department = new Department();
    dept.dept_no = req.body.dept_no;
    dept.dept_name = req.body.dept_name;
    deptRepo.saveDepartment(dept).then((result: any) => {
        console.log("Result : " + result);
        res.send(result);
    });
};

export let removeDepartment = async (req: Request, res: Response) => {
    let deptRepo: DeptRepo = new DeptRepo();
    console.log("Received removeDepartment ==> DELETE");
    console.log(req.body);
    deptRepo.removeDepartment(req.params.dept_no);
};