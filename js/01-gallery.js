import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const allGalleryImage = galleryItems.map(
  ({ preview, original, description }) => {
    gallery.insertAdjacentHTML(
      "afterbegin",
      `<div class="gallery__item">
    <a class="gallery__link" href="${preview}">
    <img class="gallery__image" src="${original}" alt="${description}" />
        </a>
    </div>`
    );
  }
);

const galleryImageFunction = (e) => {
  const instance = basicLightbox.create(`
    <img src="e.target.dataset.src" width="800" height="600">
`);

  instance.show();
  console.log(instance);
};

gallery.addEventListener("click", galleryImageFunction);
