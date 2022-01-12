import express from 'express';
import { CreateNoteController } from '../../../../modules/notes/services/createNote/CreateNoteController';
import { EditNoteController } from '../../../../modules/notes/services/editNote/EditNoteController';
import { DeleteNoteController } from '../../../../modules/notes/services/deleteNote/DeleteNoteController';
import { ensureAuthenticated } from '../middleware/ensureAuthenticated';

const notesRoutes = express();

const createNoteController = new CreateNoteController();
const editNoteController = new EditNoteController();
const deleteNoteController = new DeleteNoteController();

notesRoutes.post("/", ensureAuthenticated, createNoteController.handle);
notesRoutes.post("/edit/:id", ensureAuthenticated, editNoteController.handle);
notesRoutes.post("/delete/:id", ensureAuthenticated, deleteNoteController.handle);

export { notesRoutes };