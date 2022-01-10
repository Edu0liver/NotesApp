import { container } from "tsyringe";
import { CreateUserService } from "./CreateUserService";
import { Request, Response } from 'express';

class CreateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, password } = request.body;

        const createUserService = container.resolve(CreateUserService);

        await createUserService.execute({ name, email, password });

        return response.status(201).send();
    }
}

export { CreateUserController };