import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryListRef = document.querySelector('.gallery');

function createMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>`;
    })
    .join('');
}

const markup = createMarkup(galleryItems);

galleryListRef.insertAdjacentHTML('afterbegin', markup);

galleryListRef.addEventListener('click', onImgClick);

function onImgClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const origImgLink = event.target.dataset.source;

  showFullImage(origImgLink);
}

function showFullImage(link) {
  const instance = basicLightbox.create(`<img src="${link}">`, {
    onShow: instance => {
      window.addEventListener('keydown', onEscPress);
    },
    onClose: instance => {
      window.removeEventListener('keydown', onEscPress);
    },
  });

  instance.show();

  function onEscPress(event) {
    if (event.code === 'Escape') {
      instance.close();
      window.removeEventListener('keydown', onEscPress);
    }
  }
}
