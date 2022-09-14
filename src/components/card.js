
import { openPopup } from './modal.js';
import { cardsContent, popupWithImage, popupImageContainer, popupImageName } from './constants.js';
import { sendLike, deleteLike, deleteCard } from './api.js';

export function createHTMLCard(card, user) {
  const contentItemTemplate = cardsContent.querySelector('#place-template').content;
  const newCard = contentItemTemplate.querySelector('.element').cloneNode(true);
  const image = newCard.querySelector('.element__img');
  const title = newCard.querySelector('.element__title');
  const likeButton = newCard.querySelector('.element__like-but');
  const trashButton = newCard.querySelector('.element__trash-button');
  const likes = newCard.querySelector('.element__likes');

  likes.textContent = card.likes.length;

  image.alt = card.name;
  image.src = card.link;

  title.textContent = card.name;

  const isLiked = card.likes.find((_user) => _user._id === user._id);
  if (isLiked) {
    likeButton.classList.toggle('element__like_active');
  }

  const isOwner = card.owner._id === user._id;
  if (isOwner) {
    trashButton.style.setProperty("display", "block");
  }

  trashButton.addEventListener('click', (event) => deleteCardHandler(event, card));
  likeButton.addEventListener('click', (event) => changeLikeHandler(event, card, likes));
  image.addEventListener('click', showImageHandler);

  return newCard;
};

function deleteCardHandler(event, card) {
  deleteCard(card._id)
    .then(response => {
      console.log(response);
      event.target.closest('.element').remove();
    })
    .catch(error => console.log(error));
}

function changeLikeHandler(event, card, likes) {
  const isLiked = event.target.classList.contains('element__like_active');
  if (isLiked) {
    deleteLike(card._id)
      .then(card => {
        likes.textContent = card.likes.length;
        event.target.classList.toggle('element__like_active');
      })
      .catch(error => console.log(error));
  } else {
    sendLike(card._id)
      .then(card => {
        likes.textContent = card.likes.length;
        event.target.classList.toggle('element__like_active');
      })
      .catch(error => console.log(error));
  }
}

function showImageHandler(event) {
  popupImageContainer.src = event.target.src;
  popupImageContainer.alt = event.target.alt;
  popupImageName.textContent = event.target.alt;
  openPopup(popupWithImage);
}
