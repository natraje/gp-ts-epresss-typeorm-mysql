import {Entity, PrimaryColumn, Column} from "typeorm";

@Entity("departments")
export class Department {

    @PrimaryColumn("varchar")
    dept_no: string;

    @Column("varchar")
    dept_name: string;
}