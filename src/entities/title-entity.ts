import {Entity, PrimaryColumn, Column} from "typeorm";
@Entity("titles")
export class Titles {

    @PrimaryColumn("int")
    emp_no: number;

    @PrimaryColumn("varchar")
    title: string;

    @Column("date")
    from_date: string;

    @Column("date")
    to_date: string;
}
