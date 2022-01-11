import { INotesRepository } from "../../repositories/INotesRepository";

class DeleteNoteService {

    constructor(
        private notesRepository: INotesRepository
    ){}

    async execute(note_id: string): Promise<void> {
        const note = await this.notesRepository.findById(note_id);

        if(!note){
            throw new Error("Note does not exists !")
        }

        await this.notesRepository.delete(note_id);
    }
}

export { DeleteNoteService };