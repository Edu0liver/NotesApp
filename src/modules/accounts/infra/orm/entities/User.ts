import { Note } from '../../../../notes/infra/orm/entities/Note';
import { v4 as uuidV4 } from 'uuid'

class User {

    id: string;
    name: string;
    email: string;
    password: string;
    notes: Note[];

    constructor(){
        if(!this.id){
            this.id = uuidV4()
        }
    }
}

export { User };