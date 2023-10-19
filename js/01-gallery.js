import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`
    )
    .join("");
}

function openModal(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") return;

  const source = event.target.dataset.source;

  const instance = basicLightbox.create(
    `<img src="${source}" alt="${event.target.alt}" width="800" height="600">`
  );

  instance.show();

  document.addEventListener("keyup", closeModalOnEsc);

  function closeModalOnEsc(event) {
    if (event.key === "Escape") {
      instance.close();
      document.removeEventListener("keyup", closeModalOnEsc);
    }
  }
}

gallery.addEventListener("click", openModal);

gallery.insertAdjacentHTML("afterbegin", createMarkup(galleryItems));

console.log(galleryItems);
