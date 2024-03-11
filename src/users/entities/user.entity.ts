import { Entity, Column, DeleteDateColumn } from "typeorm";

@Entity()
export class User {
    
    @Column({ primary: true, generated: true })
    id: number;

    @Column()
    email: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @DeleteDateColumn()
    deletedAt: Date;
}
