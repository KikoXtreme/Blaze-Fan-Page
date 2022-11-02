import { post } from "./util/requester";

const url = 'http://localhost:3030/users';

export const login = (username, email, password, age) => post(`${url}/login`, { username, email, password, age });
export const register = (username, email, password, age) => post(`${url}/register`, { username, email, password, age });

export const logout = async (accessToken) => {
    try {
        const res = await fetch(`${url}/logout`, {
            headers: {
                'X-Authorization': accessToken,
            },
        })

        return res;
    } catch (error) {
        console.log(error);
    }
}