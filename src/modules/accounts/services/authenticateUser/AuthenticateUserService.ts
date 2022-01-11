import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository"

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string;
        email: string;
    };
    token: string;

}

@injectable()
class AuthenticateUserService {

    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ){}

    async execute({ email, password }: IRequest ): Promise<IResponse> {
        const user = await this.usersRepository.findByEmail(email);
        const passwordMatch = await compare(password, user.password);

        if(!user){
            throw new Error("Email or password incorrect !")
        }

        if(!passwordMatch){
            throw new Error("Email or password incorrect !")
        }

        const token = sign({}, "123", {
            subject: user.id,
            expiresIn: "1d"
        });

        const authResponse: IResponse = {
            token,
            user: {
                name: user.name,
                email: user.email,
            }
        }

        return authResponse;
    }
}

export { AuthenticateUserService } 