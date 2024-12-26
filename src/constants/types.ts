export type APIError = {
    status?: number,
    response: {
        status: number
        data: {
            detail: string
        }
    }
}

export type UserInfo = {
    _id: string;
    name: string;
    user_email: string;
    [key: string]: string | number | boolean | null;
};

export type UserContextType = {
    userInfo: UserInfo | null;
    updateUser: (updatedInfo: Partial<UserInfo>, updateLocalStorage?: boolean) => void;
    logout: () => void;
};