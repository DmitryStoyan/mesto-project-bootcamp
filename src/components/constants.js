export const buttonOpenPopupProfile = document.querySelector('.profile__edit-button');
export const closePopupProfileButton = document.querySelector('.popup__close-profile');
export const openPopupCard = document.querySelector('.profile__add-button');
export const closePopupCard = document.querySelector('.popup__close-card');
export const popupProfile = document.querySelector('.popup-profile');
export const popupCard = document.querySelector('.popup-card');
export const popupCloseButtons = document.querySelectorAll('.popup__close-button');
export const editProfileForm = document.querySelector('.popup-profile__form');
export const formPopupCard = document.querySelector('.popup-card__form');
export const cardsContent = document.querySelector('.elements');
export const popupWithImage = document.querySelector('.popup-image');
export const editProfileFormNameInput = document.querySelector('.popup__input-name');
export const editProfileFormJobInput = document.querySelector('.popup__input-job');
export const popupImageContainer = popupWithImage.querySelector('.popup-image__container');
export const popupImageName = popupWithImage.querySelector('.popup-image__name');
export const nameInput = formPopupCard.querySelector('.popup__input-title');
export const imageLinkInput = formPopupCard.querySelector('.popup__input-image');
export const profile = {
  name: document.querySelector('.profile__title'),
  job: document.querySelector('.profile__subtitle')
};
export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
