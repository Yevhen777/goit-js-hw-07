import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const allGalleryImage = galleryItems.map(
  ({ preview, original, description }) => {
    gallery.insertAdjacentHTML(
      "afterbegin",
      `<a class="gallery__item" href="${original}">
    <img class="gallery__image"
      data-source="${original}"
    src="${preview}" alt="${description}" />
        </a>`
    );
  }
);

function onHandGallary(e) {
  e.preventDefault();
  const altEl = e.target.alt;
  let lightbox = new SimpleLightbox(".gallery a", {
    docClose: true,
    captionsData: "alt",

    captionDelay: 250,
  });
}
gallery.addEventListener("click", onHandGallary);
