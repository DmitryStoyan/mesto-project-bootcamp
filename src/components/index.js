import '../index.css';

import {buttonOpenPopupProfile, closePopupProfileButton, openPopupCard, closePopupCard, popupProfile, popupCard, popupCloseButtons, editProfileForm, formPopupCard, editProfileFormNameInput, editProfileFormJobInput, nameInput, imageLinkInput, profile} from './constants.js';
import { closePopup } from './modal.js';
import './card.js';
import { enablevalidation } from './validate.js';

function openPopupForEditingProfile() {
  editProfileFormNameInput.value = profile.name.textContent;
  editProfileFormJobInput.value = profile.job.textContent;

  openPopup(popupProfile);
}

function closePopupForEditingProfile() {
  closePopup(popupProfile);
}

buttonOpenPopupProfile.addEventListener('click', openPopupForEditingProfile);
closePopupProfileButton.addEventListener('click', closePopupForEditingProfile);

openPopupCard.addEventListener('click', () => {
  openPopup(popupCard);
});

closePopupCard.addEventListener('click', () => {
  closePopup(popupCard);
});

function editProfile(event) {
  event.preventDefault();

  profile.name.textContent = editProfileFormNameInput.value;
  profile.job.textContent = editProfileFormJobInput.value;

  popupProfile.classList.remove('popup_opened');
}

editProfileForm.addEventListener('submit', editProfile);

function getValuesFromCreateCardPopup(event) {
  event.preventDefault();

  const card = {
    name: nameInput.value,
    link: imageLinkInput.value
  };

  resetInputFields(nameInput, imageLinkInput);

  cardsContent.prepend(createCard(card));

  popupCard.classList.remove('popup_opened');
}

function resetInputFields(...inputs) {
  inputs.forEach(input => {
    input.value = '';
  });
}

popupCloseButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

document.addEventListener('keydown', function (evt) {
  const popup = document.querySelector('.popup_opened');
  if (evt.key === 'Escape') {
    closePopup(popup);
  }
});


document.addEventListener('click', function (evt) {
  const popup = document.querySelector('.popup_opened');
  if (evt.target === popup) {
    closePopup(popup);
  }
})

formPopupCard.addEventListener('submit', getValuesFromCreateCardPopup);

function openPopup(popup) {
  popup.classList.add('popup_opened');
};

enablevalidation({
  formSelector: '.popup__edit-profile',
  inputSelector: '.popup__container-field',
  submitButtonSelector: '.popup__container-button',
  inactiveButtonClass: 'popup__container-button_disabled',
  inputErrorClass: 'popup__container-field_error',
  errorClass: 'popup__input-error_active',
});
