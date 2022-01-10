import { IUsersRepository } from "../../../accounts/repositories/IUsersRepository";
import { ICreateNoteDTO } from "../../dtos/ICreateNoteDTO";
import { INotesRepository } from "../../repositories/INotesRepository";


class CreateNoteService {

    constructor(
        private notesRepository: INotesRepository,
        private usersRepository: IUsersRepository
    ){}

        async execute({ user_id, body, name}: ICreateNoteDTO): Promise<void> {
            const user = await this.usersRepository.findById(user_id);

            if(!user){
                throw new Error("User does not exist");
            }

            await this.notesRepository.create({
                user_id,
                body,
                name
            });

        }
}

export { CreateNoteService };