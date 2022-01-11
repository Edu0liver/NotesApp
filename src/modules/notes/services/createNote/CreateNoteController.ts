import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateNoteService } from './CreateNoteService';

class CreateNoteController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.user; // request.user
        const { name, body } = request.body;

        const createNoteService = container.resolve(CreateNoteService);

        await createNoteService.execute({ name, body, user_id: id });

        return response.status(201).send();
    }
}

export { CreateNoteController };