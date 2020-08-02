import { BACKEND_URL } from '../config.js';

const endpoint = 'auth/local';

export default class UserApi {
    static async login(credentials) {

        const data = {
            identifier: credentials.email,
            password: credentials.password
        };

        let response = await fetch(BACKEND_URL + endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        return response.json();

    }
}