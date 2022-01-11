import express from 'express';
import { EditNoteController } from '../../../../modules/notes/services/editNote/EditNoteController';
import { CreateNoteController } from '../../../../modules/notes/services/createNote/CreateNoteController';
import { DeleteNoteController } from '../../../../modules/notes/services/deleteNote/DeleteNoteController';

const notesRoutes = express();

const createNoteController = new CreateNoteController();
const editNoteController = new EditNoteController();
const deleteNoteController = new DeleteNoteController();

notesRoutes.post("/", createNoteController.handle);
notesRoutes.post("/edit", editNoteController.handle);
notesRoutes.post("/delete", deleteNoteController.handle);

export { notesRoutes };