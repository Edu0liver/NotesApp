import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository"

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    token: string;
    user: {
        name: string;
        email: string;
    };
}

@injectable()
class AuthenticateUserService {

    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ){}

    async execute({ email, password }: IRequest ): Promise<IResponse> {
        const user = await this.usersRepository.findByEmail(email);
        const passwordMatch = compare(password, user.password);

        if(!user){
            throw new Error("Email is incorrect!");
        }

        if(!passwordMatch){
            throw new Error("Password is incorrect!");
        }

        const token = sign({}, "123", {
            subject: user.id,
            expiresIn: "1d"
        })
        const authReturn: IResponse = {
            token,
            user: {
                name: user.name,
                email: user.email
            }
        }

        return authReturn;
    }
}

export { AuthenticateUserService } 