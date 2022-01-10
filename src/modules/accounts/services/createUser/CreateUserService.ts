import { hash } from "bcrypt";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";


class CreateUserService {
    
    constructor(
        private usersRepository: IUsersRepository
    ){}

    async execute({ email, name, password }: ICreateUserDTO): Promise<void> {
        const userExists = this.usersRepository.findByEmail(email);
        const passwordHash = await hash(password, 8);

        if(userExists) {
            throw new Error("User already exists !");
        }

        if(!passwordHash) {
            throw new Error("Requires a password !");
        }

        await this.usersRepository.create({
            name,
            email,
            password
        })
        
    }
}

export { CreateUserService };