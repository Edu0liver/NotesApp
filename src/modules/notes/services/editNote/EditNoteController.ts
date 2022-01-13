import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { EditNoteService } from './EditNoteService';

class EditNoteController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params; // note_id
        const { body, name } = request.body;

        const editNoteService = container.resolve(EditNoteService);

        const note = await editNoteService.execute({ id, body, name });

        return response.status(200).json(note);
    }
}

export { EditNoteController }