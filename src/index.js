import './style.css';
import { photos } from './js/photos';
const path = require('path');

const anchors = document.querySelectorAll('a[href*="#"]');
const family = document.querySelector('.family');
const nextButton = document.querySelector('.gallery__arrow_right');
const prevButton = document.querySelector('.gallery__arrow_left');
const collageItems = document.querySelectorAll('.collage__item');
collageItems.forEach((item) => {
  item.addEventListener('click', increaseImage);
})

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
};

let count = 1;
// import { photos } from "./photos";

function next(item) {
  const image = document.querySelector('.gallery__item');
  if (count == 1) {
    image.style.backgroundImage = `url('${item[count]}')`;
    prevButton.classList.remove('display-none');
    count++;
  }
  else if ((count > 1) && ((count + 1) !== item.length)) {
    image.style.backgroundImage = `url('${item[count]}')`;
    count++;

  }
  else if ((count + 1) == item.length) {
    image.style.backgroundImage = `url('${item[count]}')`;
    nextButton.classList.add('display-none');
  }
};

function previous(item) {
  const image = document.querySelector('.gallery__item');
  if ((count + 1) == item.length) {
    image.style.backgroundImage = `url('${item[count - 1]}')`;
    nextButton.classList.remove('display-none');
    count--;

  }
  else if ((count < item.length) && ((count) > 2)) {
    count--;
    image.style.backgroundImage = `url('${item[count - 1]}')`;

  }
  else if (count == 2) {
    count--;
    image.style.backgroundImage = `url('${item[count - 1]}')`;
    prevButton.classList.add('display-none');
  }
};

// family.addEventListener('mouseover', () => {
//   document.querySelector('.family__title-fourth').classList.add('family__title_animation-bottom');
//   setTimeout(() => {
//     document.querySelector('.family__title-first').classList.add('family__title_animation-bottom');
//   }, 1000);
//   setTimeout(() => {
//     document.querySelector('.family__title-second').classList.add('family__title_animation-bottom');
//   }, 2000);
//   setTimeout(() => {
//     document.querySelector('.family__title-third').classList.add('family__title_animation-bottom');
//   }, 3000);
// });
// Увеличивает картинку
function increaseImage(event) {
  if (event.target.classList.contains('collage__item')) {
    const body = document.querySelector('body');
    const zoomCard = document.createElement('div');
    const zoomImage = document.createElement('div');
    const closeButton = document.createElement('div');
    const urlValue = event.target.getAttribute('src');
    
    // closeButton.setAttribute('src', `./images/close.svg`);

    zoomCard.classList.add('zoom-card');
    zoomImage.classList.add('zoom-card__image');
    closeButton.classList.add('zoom-card__close');

    closeButton.addEventListener('click', function(){
      zoomCard.remove();
    });
    zoomCard.addEventListener('click', function(){
      zoomCard.remove();
    });
    zoomImage.setAttribute('style', `background-image: url(${urlValue})`);

    zoomImage.appendChild(closeButton);
    zoomCard.appendChild(zoomImage);
    body.appendChild(zoomCard);
  }
};

nextButton.addEventListener('click', (event) => {
  event.preventDefault();
  next(photos);
});
prevButton.addEventListener('click', (event) => {
  event.preventDefault();
  previous(photos);
});

document.querySelectorAll('.header__link').forEach((elem) => {
  elem.addEventListener('click', () => {
    elem.classList.add('header__link_animation');
  });
});

window.onload = () => {
    document.querySelector('.main__title-first').classList.add('main__title_animation-bottom');
    setTimeout(() => {
        document.querySelector('.main__title-second').classList.add('main__title_animation-bottom');
    }, 1500);
    setTimeout(() => {
        document.querySelector('.main__title-third').classList.add('main__title_animation-bottom');
    }, 3000);
};
// zoom for image
