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
export const popupAvatar = document.querySelector('.popup__avatar');
export const popupAvatarEdit = document.querySelector('.profile__avatar-button');
export const inputAvatar = document.querySelector('#avatar-edit');
export const formAvatar = document.querySelector('#edit-avatar');
export const profile = {
  avatar: document.querySelector('.profile__avatar'),
  name: document.querySelector('.profile__title'),
  job: document.querySelector('.profile__subtitle')
};

// API
export const cohortId = 'wbc-cohort-1';
export const token = '2a4a97ff-1e79-431a-b791-507bc640fd7b';
export const usersMeApi = `https://nomoreparties.co/v1/${cohortId}/users/me`;
export const cardsApi = `https://nomoreparties.co/v1/${cohortId}/cards`;
export const usersMeAvatarApi = `https://nomoreparties.co/v1/${cohortId}/users/me/avatar`;
export const cardsLikesApi = `https://nomoreparties.co/v1/${cohortId}/cards/likes`;

