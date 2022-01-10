import { User } from 'modules/accounts/infra/orm/entities/User';
import { v4 as uuidV4 } from 'uuid'

class Note {
    id: string;
    body: string;
    user: User;

    constructor(){
        if(!this.id){
            this.id = uuidV4();
        }
    }
}

export { Note };