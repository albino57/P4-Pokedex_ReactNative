import axios from 'axios';

export const BASE_URL_POKE_3D_API = 'https://pokemon-3d-api.onrender.com/';

const api3D = axios.create({
    baseURL:BASE_URL_POKE_3D_API + 'v1/'
});

export function getPokemon3D() {
    return api3D.get('pokemon');
}
