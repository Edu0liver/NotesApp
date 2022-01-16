import { Note } from '../../../../notes/infra/orm/entities/Note';
import { v4 as uuidV4 } from 'uuid'
import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from 'typeorm';

@Entity("users")
class User {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    constructor(){
        if(!this.id){
            this.id = uuidV4()
        }
    }
}

export { User };