import { BACKEND_URL } from '../config.js';

const endpoint = '/characters';

export default class CharacterApi {
    static async getCharactersByUserId(id) {
        const character = await fetch(BACKEND_URL + endpoint + '?user.id=' + id);
        return character.json();
    }
}
