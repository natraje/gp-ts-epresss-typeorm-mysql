
import {Entity, PrimaryColumn, Column} from "typeorm";

@Entity("salaries")
export class Salaries {

    @PrimaryColumn("int")
    emp_no: number;

    @Column("int")
    salary: number;

    @Column("date")
    from_date: string;

    @Column("date")
    to_date: string;
}
