import { ICreateNoteDTO } from "../dtos/ICreateNoteDTO";
import { Note } from "../infra/orm/entities/Note";

interface INotesRepository {
    create({ user_id, name, body }: ICreateNoteDTO): Promise<void>;
    edit(note_id: string, body: string): Promise<Note>;
    delete(note_id: string): Promise<void>;
}

export { INotesRepository };