import express from 'express';
import { notesRoutes } from './notes.routes';
import { usersRoutes } from './users.routes';

const router = express();

router.use("/users", usersRoutes);
router.use("/notes", notesRoutes);

export { router }