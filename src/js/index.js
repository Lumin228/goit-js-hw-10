import { fetchBreeds, fetchCatByBreed } from './cat-api';
import Notiflix from 'notiflix';

const refs = {
  selector: document.querySelector('.breed-select'),
  loaderSpan: document.querySelector('.loader'),
  errorP: document.querySelector('.error'),
  infoDiv: document.querySelector('.cat-info'),
};

refs.selector.addEventListener('change', () => {
  const selectedBreedId = refs.selector.value;
  breedSelect(selectedBreedId);
});

function createBreed() {
  fetchBreeds()
    .then(breeds => {
      refs.selector.classList.remove('is-hidden');
      refs.loaderSpan.classList.add('is-hidden');
      breeds.map(key => {
        const createOption = `<option value="${key.id}">${key.name}</option>`;
        refs.selector.innerHTML += createOption;
      });
    })
    .catch(err => {
      refs.loaderSpan.classList.add('is-hidden');
    refs.selector.classList.add('is-hidden');
    refs.infoDiv.classList.add('is-hidden');
      return Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');});
}

createBreed();

function breedSelect(id) {
  refs.selector.classList.add('is-hidden');
  refs.loaderSpan.classList.remove('is-hidden');
  fetchCatByBreed(id).then(res => {
    refs.selector.classList.remove('is-hidden');
    refs.loaderSpan.classList.add('is-hidden');
    refs.infoDiv.classList.remove('is-hidden');
    refs.infoDiv.classList.add('allign-items')
    const creatediv = `<img src="${res.BREED_IMAGE}" class="margin-top" width="50%" height="50%" alt="${res.BREED_NAME}"></img>
    <div class="margin-top-txt">
    <h1 class="">${res.BREED_NAME}</h1>
    <p>${res.BREED_DESCRIPTION}</p>
    <p><span class="fat">Temperament: </span>${res.BREED_TEMPERAMENT}</p>
    </div>`;
    refs.infoDiv.innerHTML = creatediv
  }).catch(err => {
    refs.loaderSpan.classList.add('is-hidden');
    refs.selector.classList.add('is-hidden');
    refs.infoDiv.classList.add('is-hidden');
    return Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
  });
}
