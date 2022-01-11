import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { EditNoteService } from './EditNoteService';

class EditNoteController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.user;
        const { body, name } = request.body;

        const editNoteService = container.resolve(EditNoteService);

        await editNoteService.execute({ id, body, name });

        return response.status(200).send();
    }
}

export { EditNoteController }