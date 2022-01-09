import { UserAuthPayload, User } from './userActionModels';

const baseUrl = 'https://61c37a449cfb8f0017a3ebae.mockapi.io/users';

const userActionsApi = {
    signUp(payload: UserAuthPayload): Promise<User> {
        return fetch(baseUrl, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .catch((error) => console.log(error));
    },
    getUsers(): Promise<User[]> {
        return fetch(baseUrl, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .catch((error) => console.log(error));
    },
    getUserById(id: string): Promise<User> {
        return fetch(`${baseUrl}/${id}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .catch((error) => console.log(error));
    },
};

export default userActionsApi;
