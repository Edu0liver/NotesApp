import { container } from "tsyringe";
import { Request, Response } from 'express';
import { DeleteNoteService } from "./DeleteNoteService";

class DeleteNoteController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params; // note_id

        const deleteNoteService = container.resolve(DeleteNoteService);

        await deleteNoteService.execute(id);

        return response.status(204).send();
    }
}

export { DeleteNoteController }