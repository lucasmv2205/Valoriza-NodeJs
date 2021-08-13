import { getCustomRepository } from "typeorm"
import { usersRepositories } from "../repositories/UsersRepositories"
import { classToPlain } from 'class-transformer';

class ListUsersService {
    async execute() {
        const UsersRepositories = getCustomRepository(usersRepositories);

        const users = await UsersRepositories.find();

        return classToPlain(users);
    }
}

export { ListUsersService }