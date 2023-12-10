import { fetchBreeds, fetchCatByBreed } from "./cat-api";

const refs = {
    selector: document.querySelector('.breed-select'),
    loaderSpan: document.querySelector('.loader'),
    errorP: document.querySelector('.error'),
    infoDiv: document.querySelector('.cat-info'),
}
const id = 'amis'
fetchCatByBreed(id).then(res => console.log(res))
