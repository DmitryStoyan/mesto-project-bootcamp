import '../index.css';

import {
  buttonOpenPopupProfile,
  closePopupProfileButton,
  openPopupCard,
  closePopupCard,
  popupProfile,
  popupCard,
  popupCloseButtons,
  editProfileForm,
  formPopupCard,
  cardsContent,
  popupWithImage,
  editProfileFormNameInput,
  editProfileFormJobInput,
  popupImageContainer,
  popupImageName,
  nameInput,
  imageLinkInput,
  profile,
  popupAvatar,
  popupAvatarEdit,
  inputAvatar,
  formAvatar
} from './constants.js';
import { closePopup, openPopup } from './modal.js';
import { createHTMLCard } from './card';
import { toggleButtonState, resetInputFields } from './utils.js';
import { enablevalidation } from './validate.js';
import { getUserInfo, editUserInfo, createCard, getCards, updateAvatar } from './api.js';

let user = null;

// Отправляем запрос на получение данных о пользователе
getUserInfo()
  .then(initializeUser)
  .catch(error => console.log(error));

// Загрузка данных пользователя и аватара на страницу
function initializeUser(_user) {
  user = _user;
  profile.avatar.style.setProperty('background-image', `url(${_user.avatar})`);
  profile.name.textContent = _user.name;
  profile.job.textContent = _user.about;
}

// Отправляем запрос на получение всех карточек
getCards()
  .then(cards => cards.reverse().forEach(card => {
    cardsContent.prepend(createHTMLCard(card, user));
  }))
  .catch(error => console.log(error));

buttonOpenPopupProfile.addEventListener('click', () => openPopup(popupProfile, [{
  input: editProfileFormNameInput,
  value: profile.name.textContent,
}, {
  input: editProfileFormJobInput,
  value: profile.job.textContent,
}]));
closePopupProfileButton.addEventListener('click', () => closePopup(popupProfile));

// Pop-up создания карточки
openPopupCard.addEventListener('click', () => {

  openPopup(popupCard);
});
closePopupCard.addEventListener('click', () => closePopup(popupCard));
// formPopupCard.addEventListener('submit', getValuesFromCreateCardPopup);
formPopupCard.addEventListener('submit', (event) => {

  event.preventDefault();
  event.submitter.textContent = 'Сохранение...';
  getValuesFromCreateCardPopup(event);
});


function editProfile(event) {
  event.preventDefault();

  const newUserInfo = {
    name: editProfileFormNameInput.value,
    about: editProfileFormJobInput.value
  };

  // Отправляем запрос на редактирование данных о пользователе
  editUserInfo(newUserInfo)
    .then((user) => {
      profile.name.textContent = user.name;
      profile.job.textContent = user.about;
    })
    .catch((error) => console.log(error));

  popupProfile.classList.remove('popup_opened');
}

editProfileForm.addEventListener('submit', editProfile);

function getValuesFromCreateCardPopup(event) {
  event.preventDefault();

  const card = {
    name: nameInput.value,
    link: imageLinkInput.value
  };

  // Отправляем запрос на создание новой карточки
  createCard(card)
    .then((card) => {
      resetInputFields(nameInput, imageLinkInput);
      cardsContent.prepend(createHTMLCard(card, user));
      closePopup(popupCard);
    })
    .catch((error) => console.log(error));
}

popupCloseButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

//открытие попап редактирования аватар
popupAvatarEdit.addEventListener('click', function (event) {
  inputAvatar.value = '';
  openPopup(popupAvatar);
});

//функция замены ссылки на аватар
formAvatar.addEventListener('submit', (event) => {
  event.preventDefault();

  event.submitter.textContent = 'Сохранение...';

  updateAvatar(inputAvatar.value)
    .then((user) => {
      profile.avatar.style.setProperty("background-image", `url(${user.avatar})`);
      closePopup(popupAvatar);
    })
    .catch((error) => console.log(error))
    .finally(() => {
      event.submitter.textContent = 'Сохранить';
    })
});

document.addEventListener('click', function (event) {
  const popup = document.querySelector('.popup_opened');
  if (event.target === popup) {
    closePopup(popup);
  }
});



enablevalidation({
  formSelector: '.popup__edit-profile',
  inputSelector: '.popup__container-field',
  submitButtonSelector: '.popup__container-button',
  inactiveButtonClass: 'popup__container-button_disabled',
  inputErrorClass: 'popup__container-field_error',
  errorClass: 'popup__input-error_active',
});




