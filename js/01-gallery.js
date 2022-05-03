import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const allGalleryImage = galleryItems.map(
  ({ preview, original, description }) => {
    gallery.insertAdjacentHTML(
      "afterbegin",
      `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image"
      data-source="${original}"
    src="${preview}" alt="${description}" />
        </a>
    </div>`
    );
  }
);

const onKeydown = (e) => {
  if (e.code === "Escape") {
    return;
  }
  instance.close();
};
window.addEventListener("keydown", onKeydown);

const galleryImageFunction = (e) => {
  e.preventDefault();
  if (e.target.tagName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}" width="1400" height="900">`
  );

  instance.show();
};
gallery.addEventListener("click", galleryImageFunction);
