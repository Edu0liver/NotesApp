import express from 'express';

const router = express();

router.use("/users", usersRoutes);
router.use("/notes", notesRoutes);

export { router }