import {AxiosProvider} from '../http/axios-provider';
import {AxiosResponse} from 'axios';
import {User} from '../beans/user';

const USER_URL = '/api/users';

export interface UserAction { readonly type: string; readonly user: User;
}

export const setUser = (user: User): UserAction => {
    return {type: 'SET_USER', user};
};

export const addUser: (user: User) => Promise<User> =
    (user: User) => AxiosProvider.axios()
        .post(USER_URL, {
            email: user.email,
            password: user.password,
            logged: true
        })
        .then((resp: AxiosResponse) => {
        return resp.data; })
        .then((user: any) => {
            return new User(user.id, user.email, user.password, user.is_logged);
        });
