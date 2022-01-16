import { User } from '../../../../accounts/infra/orm/entities/User';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid'

@Entity("notes")
class Note {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    body: string;

    @ManyToOne(()=> User)
    @JoinColumn({name: "user_id"})
    user: User;

    @Column()
    user_id: string;

    constructor(){
        if(!this.id){
            this.id = uuidV4();
        }
    }
}

export { Note };