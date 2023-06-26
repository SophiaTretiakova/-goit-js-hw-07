import { galleryItems } from "./gallery-items.js";
// Change code below this line
const images = document.querySelector(".gallery");
const html = [...galleryItems].reduce((accumulator, image) => {
  return (
    accumulator +
    `<li class="gallery__item">
   <a class="gallery__link" href="${image.original}">
      <img class="gallery__image" src="${image.original}" alt="${image.description}" />
   </a>
</li>`
  );
}, "");
images.insertAdjacentHTML("beforeend", html);

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});
console.log(galleryItems);
