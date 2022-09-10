import { cardsContent, popupWithImage, popupImageContainer, popupImageName, initialCards } from './constants.js';
import { closePopup } from './modal.js';

export function createCard(card) {
  const contentItemTemplate = cardsContent.querySelector('#place-template').content;
  const newCard = contentItemTemplate.querySelector('.element').cloneNode(true);
  const image = newCard.querySelector('.element__img');
  const title = newCard.querySelector('.element__title');
  const likeButton = newCard.querySelector('.element__like-but');
  const trashButton = newCard.querySelector('.element__trash-button');

  image.alt = card.name;
  image.src = card.link;

  title.textContent = card.name;

  likeButton.addEventListener('click', (event) => {
    event.target.classList.toggle('element__like_active');
  });

  trashButton.addEventListener('click', (event) => {
    event.target.closest('.element').remove();
  });

  image.addEventListener('click', (event) => {
    popupImageContainer.src = event.target.src;
    popupImageName.textContent = event.target.alt;
    openPopup(popupWithImage);
  });

  return newCard;
};

export function openPopup(popup) {
  popup.classList.add('popup_opened');
};

initialCards.forEach(card => {
  cardsContent.prepend(createCard(card));
});