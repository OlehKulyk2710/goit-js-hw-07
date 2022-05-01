import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryListRef = document.querySelector('.gallery');

function createMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>`;
    })
    .join('');
}

const markup = createMarkup(galleryItems);

galleryListRef.insertAdjacentHTML('afterbegin', markup);

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
