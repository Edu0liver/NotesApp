import { Note } from "../../infra/orm/entities/Note";
import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../../accounts/repositories/IUsersRepository";
import { ICreateNoteDTO } from "../../dtos/ICreateNoteDTO";
import { INotesRepository } from "../../repositories/INotesRepository";

@injectable()
class CreateNoteService {

    constructor(
        @inject("NotesRepository")
        private notesRepository: INotesRepository,
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ){}

        async execute({ user_id, body, name}: ICreateNoteDTO): Promise<Note> {
            const user = await this.usersRepository.findById(user_id);

            if(!user){
                throw new Error("User does not exist");
            }

            const note = await this.notesRepository.create({
                user_id,
                body,
                name
            });

            return note;
        }
}

export { CreateNoteService };