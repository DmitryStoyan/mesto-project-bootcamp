import '../index.css';

import {
  buttonOpenPopupProfile,
  openPopupCard,
  popupProfile,
  popupCard,
  popupCloseButtons,
  editProfileForm,
  formPopupCard,
  cardsContent,
  editProfileFormNameInput,
  editProfileFormJobInput,
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
import { resetInputFields, disableButton } from './utils.js';
import { enablevalidation } from './validate.js';
import { getUserInfo, editUserInfo, createCard, getCards, updateAvatar } from './api.js';

let user = null;
const options = {
  formSelector: '.popup__edit-profile',
  inputSelector: '.popup__container-field',
  submitButtonSelector: '.popup__container-button',
  inactiveButtonClass: 'popup__container-button_disabled',
  inputErrorClass: 'popup__container-field_error',
  errorClass: 'popup__input-error_active',
};

Promise.all([getUserInfo(), getCards()])
  // Отправляем запрос на получение данных о пользователе и всех карточек
  .then(([user, cards]) => {
    initializeUser(user);
    cards.reverse().forEach(card => {
      cardsContent.prepend(createHTMLCard(card, user));
    });
  })
  .catch((error) => console.log(error))
  .finally(() => null);

// Загрузка данных пользователя и аватара на страницу
function initializeUser(_user) {
  user = _user;
  profile.avatar.style.setProperty('background-image', `url(${_user.avatar})`);
  profile.name.textContent = _user.name;
  profile.job.textContent = _user.about;
}

buttonOpenPopupProfile.addEventListener('click', () => {
  editProfileFormNameInput.value = profile.name.textContent;
  editProfileFormJobInput.value = profile.job.textContent;
  openPopup(popupProfile);
});

// Pop-up создания карточки
openPopupCard.addEventListener('click', () => {
  openPopup(popupCard);
});

formPopupCard.addEventListener('submit', getValuesFromCreateCardPopup);

function editProfile(event) {
  event.preventDefault();
  event.submitter.textContent = 'Сохранение...';

  const newUserInfo = {
    name: editProfileFormNameInput.value,
    about: editProfileFormJobInput.value
  };

  // Отправляем запрос на редактирование данных о пользователе
  editUserInfo(newUserInfo)
    .then((user) => {
      profile.name.textContent = user.name;
      profile.job.textContent = user.about;
      closePopup(popupProfile);
      disableButton(event.submitter, options);
    })
    .catch((error) => console.log(error))
    .finally(() => {
      event.submitter.textContent = 'Сохранить';
    });
}

editProfileForm.addEventListener('submit', editProfile);

function getValuesFromCreateCardPopup(event) {
  event.preventDefault();
  event.submitter.textContent = 'Сохранение...';

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
      disableButton(event.submitter, options);
    })
    .catch((error) => console.log(error))
    .finally(() => {
      event.submitter.textContent = 'Сохранить';
    });
}

popupCloseButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

// открытие попап редактирования аватар
popupAvatarEdit.addEventListener('click', function (event) {
  openPopup(popupAvatar);
});

// функция замены ссылки на аватар
formAvatar.addEventListener('submit', (event) => {
  event.preventDefault();
  event.submitter.textContent = 'Сохранение...';

  updateAvatar(inputAvatar.value)
    .then((user) => {
      profile.avatar.style.setProperty("background-image", `url(${user.avatar})`);
      closePopup(popupAvatar);
      disableButton(event.submitter, options);
    })
    .catch((error) => console.log(error))
    .finally(() => {
      event.submitter.textContent = 'Сохранить';
    });
});

enablevalidation(options);
