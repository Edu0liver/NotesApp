import { UsersRepository } from "../../modules/accounts/infra/orm/repositories/UsersRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";
import { NotesRepository } from "../../modules/notes/infra/orm/repositories/NotesRepository";
import { INotesRepository } from "../../modules/notes/repositories/INotesRepository";
import { container } from "tsyringe";

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
);

container.registerSingleton<INotesRepository>(
    "NotesRepository",
    NotesRepository
);