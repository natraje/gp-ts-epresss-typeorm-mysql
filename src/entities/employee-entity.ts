import {Entity, PrimaryColumn, Column} from "typeorm";

export enum Gender {
    MALE = "M",
    FEMALE = "F"
}

@Entity("employees")
export class Employees {

    @PrimaryColumn("int")
    emp_no: number;

    @Column("varchar")
    first_name: string;

    @Column("varchar")
    last_name: string;

    @Column({
        type: "enum",
        enum: Gender,
    })
    gender: Gender;

    @Column("date")
    birth_date: string;

    @Column("date")
    hire_date: string;
}
