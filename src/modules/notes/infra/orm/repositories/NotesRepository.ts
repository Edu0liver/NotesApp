import { getRepository, Repository } from "typeorm";
import { ICreateNoteDTO } from "../../../dtos/ICreateNoteDTO";
import { INotesRepository } from "../../../repositories/INotesRepository";
import { Note } from "../entities/Note";

class NotesRepository implements INotesRepository {
    
    private repository: Repository<Note>;

    constructor(){
        this.repository = getRepository(Note);
    }
    
    async create({ user_id, name, body }: ICreateNoteDTO): Promise<Note> {
        const note = this.repository.create({ user_id, name, body });   
        await this.repository.save(note);

        return note;
    }
    
    async edit(id: string, body: string, name: string): Promise<Note> {
        const note = await this.repository.findOne(id);
        
        note.body = body;
        note.name = name;
        
        return note;
    }
    
    async delete(note_id: string): Promise<void> {
        await this.repository.delete({ id: note_id});
    }
    
    async findById(note_id: string): Promise<Note> {
        const note = this.repository.findOne(note_id);
        return note;
    }
}

export { NotesRepository }