import axios from 'axios';

axios.defaults.headers.common['x-api-key'] = 'live_HpoRbEEv25vm6zvDVT74cBpATiAlcBpWXpM6u1DT7Syl2Z3rIcnNK4hnKCoxGdUY';

const BASE_URL = 'https://api.thecatapi.com/v1';


export function fetchBreeds() {
    const QUERY_PARAMS = '/breeds';
    return axios.get(`${BASE_URL}${QUERY_PARAMS}?&limit=20`)
    .then(response => {
        return response.data})
    .catch(error => {throw new Error(error)})
}




export function fetchCatByBreed (breedId) {
    const QUERY_PARAMS = '/images/search?';
   return axios.get(`${BASE_URL}${QUERY_PARAMS}breed_id=${breedId}`)
    .then(result => {
        const breedInfo = {
            BREED_NAME: result.data[0].breeds[0].name,
            BREED_DESCRIPTION: result.data[0].breeds[0].description,
            BREED_IMAGE: (result.data[0].breeds[0].url)
        }
        return breedInfo
    })
    .catch(err => {throw err;});
}

