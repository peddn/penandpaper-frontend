import { BACKEND_URL } from '../config.js';

const endpoint = 'characters';

export default class CharacterApi {
    static async getCharacterById(id) {
        const character = await fetch(BACKEND_URL + endpoint + '/' + id);
        return character.json();
    }
}
