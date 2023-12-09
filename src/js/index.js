import axios from 'axios';

axios.defaults.headers.common['x-api-key'] = 'live_HpoRbEEv25vm6zvDVT74cBpATiAlcBpWXpM6u1DT7Syl2Z3rIcnNK4hnKCoxGdUY';

const BASE_URL = 'https://api.thecatapi.com/v1';

const refs = {
    selector: document.querySelector('.breedselect'),
    loader: document.querySelector('.loader'),
    ERROR_TO_SEE: document.querySelector('.error'),
    catInfo: document.querySelector('.cat-info')
};


function fetchBreeds() {
    const QUERY_PARAMS = '/breeds';
    const breeds = axios.get(`${BASE_URL}${QUERY_PARAMS}?&limit=20`)
    .then(response => {
        return response.data})
    .catch(error => {throw new Error(error)})
    console.log(breeds)
}



fetchBreeds()