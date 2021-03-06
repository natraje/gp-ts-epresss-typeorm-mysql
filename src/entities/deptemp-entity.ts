import {Entity, PrimaryColumn, Column} from "typeorm";

@Entity("dept_emp")
export class DeptEmployee {

    @PrimaryColumn("int")
    emp_no: number;

    @PrimaryColumn("int")
    dept_no: string;

    @Column("date")
    from_date: string;

    @Column("date")
    to_date: string;
}
