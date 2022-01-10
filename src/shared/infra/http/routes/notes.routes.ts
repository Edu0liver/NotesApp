import express from 'express';
import { CreateNoteController } from '../../../../modules/notes/services/createNote/CreateNoteController';

const notesRoutes = express();

const createNoteController = new CreateNoteController();

notesRoutes.post("/", createNoteController.handle);

export { notesRoutes };