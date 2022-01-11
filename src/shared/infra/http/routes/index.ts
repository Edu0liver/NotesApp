import express from 'express';
import { authenticateRoutes } from './authenticate.routes';
import { notesRoutes } from './notes.routes';
import { usersRoutes } from './users.routes';

const router = express();

router.use("/users", usersRoutes);
router.use("/notes", notesRoutes);
router.use(authenticateRoutes);

export { router }