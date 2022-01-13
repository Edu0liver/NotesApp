import { ICreateNoteDTO } from "../dtos/ICreateNoteDTO";
import { Note } from "../infra/orm/entities/Note";

interface INotesRepository {
    create({ user_id, name, body }: ICreateNoteDTO): Promise<Note>;
    edit(note_id: string, body: string, name: string): Promise<Note>;
    delete(note_id: string): Promise<void>;
    findById(note_id: string): Promise<Note>;
}

export { INotesRepository };