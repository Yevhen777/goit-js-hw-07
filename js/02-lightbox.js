import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const allGalleryImage = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
    <img class="gallery__image"
      data-source="${original}"
    src="${preview}" alt="${description}" />
        </a>`;
  })
  .join("");

gallery.insertAdjacentHTML("beforeend", allGalleryImage);

let lightbox = new SimpleLightbox(".gallery a", {
  docClose: true,
  captionsData: "alt",

  captionDelay: 250,
});

function onHandGallary(e) {
  e.preventDefault();
}
gallery.addEventListener("click", onHandGallary);
