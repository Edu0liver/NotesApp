import { inject, injectable } from "tsyringe";
import { INotesRepository } from "../../repositories/INotesRepository";

@injectable()
class DeleteNoteService {

    constructor(
        @inject("NotesRepository")
        private notesRepository: INotesRepository,
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