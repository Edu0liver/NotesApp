import { Note } from '../../infra/orm/entities/Note';
import { inject, injectable } from "tsyringe";
import { INotesRepository } from "../../repositories/INotesRepository";

interface IRequest {
    id: string;
    body: string;
    name: string;
}

@injectable()
class EditNoteService {
    constructor(
        @inject("NotesRepository")
        private notesRepository: INotesRepository,
    ){}

    async execute({ id, name, body }: IRequest): Promise<Note> {
        const note = await this.notesRepository.findById(id);

        if(!note){
            throw new Error("Note does not exists !");
        }

        const noteEdited = await this.notesRepository.edit(id, body, name);

        return noteEdited;
    }
}

export { EditNoteService }