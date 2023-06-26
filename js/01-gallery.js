import { galleryItems } from "./gallery-items.js";
// Change code below this line

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
const images = document.querySelector(".gallery");
const html = [...galleryItems].reduce((accumulator, image) => {
  return (
    accumulator +
    `<li class="gallery__item">
   <a class="gallery__link" href="${image.original}">
     <img
       class="gallery__image"
       src="${image.preview}"
       data-source="${image.original}"
       alt="${image.description}"
     />
   </a>
 </li>`
  );
}, "");
// Реалізація делегування на ul.gallery і отримання url великого зображення.
images.insertAdjacentHTML("beforeend", html);
// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox.
// Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані(.min) файли бібліотеки.

// Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
images.addEventListener("click", imageClickHandler);
// Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.

console.log(galleryItems);

function imageClickHandler(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  event.preventDefault();
  const instance = basicLightbox.create(`
    <div class="modal"><img
        src="${event.target.dataset.source}"
     /> 
    </div>
`);

  instance.show();
  console.log(event.target);
  console.log(event.currentTarget);
  console.log(event);
}
