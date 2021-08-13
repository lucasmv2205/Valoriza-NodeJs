import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"


class ListUserSenderComplimentsService {
    async execute(user_id: string) {
        const complimentRepository = getCustomRepository(ComplimentsRepositories);

        const compliments = await complimentRepository.find({
            where: {
                user_sender: user_id
            },
        });

        return compliments;
    }
}

export { ListUserSenderComplimentsService }