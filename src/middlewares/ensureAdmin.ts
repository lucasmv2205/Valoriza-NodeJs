import { Request, Response, NextFunction } from 'express';
import { getCustomRepository } from 'typeorm';
import { usersRepositories } from '../repositories/UsersRepositories';

export async function ensureAdmin(request: Request, response: Response, next: NextFunction) {
    const { user_id } = request;

    const userRepositories = getCustomRepository(usersRepositories);

    const { admin } = await userRepositories.findOne(user_id);

    if (admin) {
        return next();
    }

    return response.status(401).json({
        error: "Unauthorized"
    });
}