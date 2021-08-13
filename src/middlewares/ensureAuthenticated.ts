import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
    sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {

    const authToken = request.headers.authorization;
    if (!authToken) {
        return response.status(401).json({ message: "Token missing" });
    }

    const [, token] = authToken.split(" ");

    try {
        const { sub } = verify(token, '9ec16af23d597cebbdde38f81d4a86f7') as IPayload;

        request.user_id = sub;

        return next()
    } catch (err) {
        return response.status(401).end();
    }

}