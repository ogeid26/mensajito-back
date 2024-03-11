import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity()
export class Message {
    
    @Column({primary: true, generated: true})
    id: number;

    @Column()
    body: string;

    @Column()
    publicationDate: Date

    @ManyToOne(
    () => User,
     (user) => user.id, {eager: true})
    user: User;
}

