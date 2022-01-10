import { ICreateNoteDTO } from "../../../dtos/ICreateNoteDTO";
import { INotesRepository } from "../../../repositories/INotesRepository";
import { Note } from "../entities/Note";


class NotesRepository implements INotesRepository {

    private notes: Note[] = [];

    async create({ user_id, name, body }: ICreateNoteDTO): Promise<void> {
        const note = new Note();

        Object.assign(note, {
            user_id,
            name,
            body
        })

        this.notes.push(note);
    }

    async edit(note_id: string, body: string): Promise<Note> {
        const note = this.notes.find(note=> note.id === note_id);

        note.body = body;

        return note;
    }

    async delete(note_id: string): Promise<void> {
        const noteIndex = this.notes.findIndex(user => user.id === note_id);
        this.notes.splice(noteIndex, 1);
    }
    
}

export { NotesRepository }