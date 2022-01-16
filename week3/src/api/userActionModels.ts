interface User {
    email: string;
    password: string;
    userID: string;
}
interface UserAuthPayload {
    email: string;
    password: string;
}

export type { User, UserAuthPayload };
