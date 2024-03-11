import { Message } from "src/messages/entities/message.entity";
import { Entity, Column, DeleteDateColumn, OneToMany } from "typeorm";

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

    @OneToMany( () => Message,
        (message) => message.user)
    messages: Message[];
}
