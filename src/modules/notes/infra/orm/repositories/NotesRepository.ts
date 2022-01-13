import { ICreateNoteDTO } from "../../../dtos/ICreateNoteDTO";
import { INotesRepository } from "../../../repositories/INotesRepository";
import { Note } from "../entities/Note";


class NotesRepository implements INotesRepository {
    
    private notes: Note[] = [];
    
    async create({ user_id, name, body }: ICreateNoteDTO): Promise<Note> {
        const note = new Note();
        
        Object.assign(note, {
            user_id,
            name,
            body
        })
        
        this.notes.push(note);

        return note;
    }
    
    async edit(id: string, body: string, name: string): Promise<Note> {
        const note = this.notes.find(note=> note.id === id);
        
        note.body = body;
        note.name = name;
        
        return note;
    }
    
    async delete(note_id: string): Promise<void> {
        const noteIndex = this.notes.findIndex(user => user.id === note_id);
        this.notes.splice(noteIndex, 1);
    }
    
    async findById(note_id: string): Promise<Note> {
        const note = this.notes.find(note=> note.id === note_id);
        return note;
    }
}

export { NotesRepository }