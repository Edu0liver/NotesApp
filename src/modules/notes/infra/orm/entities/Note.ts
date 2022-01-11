import { v4 as uuidV4 } from 'uuid'

class Note {
    id: string;
    name: string;
    body: string;
    user_id: string;

    constructor(){
        if(!this.id){
            this.id = uuidV4();
        }
    }
}

export { Note };