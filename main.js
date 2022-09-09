// const buttonOpenPopupProfile = document.querySelector('.profile__edit-button');
// const closePopupProfileButton = document.querySelector('.popup__close-profile');
// const openPopupCard = document.querySelector('.profile__add-button');
// const closePopupCard = document.querySelector('.popup__close-card');
// const popupProfile = document.querySelector('.popup-profile');
// const popupCard = document.querySelector('.popup-card');
// const popupCloseButtons = document.querySelectorAll('.popup__close-button');
// const editProfileForm = document.querySelector('.popup-profile__form');
// const formPopupCard = document.querySelector('.popup-card__form');
// const cardsContent = document.querySelector('.elements');
// const popupWithImage = document.querySelector('.popup-image');
// const editProfileFormNameInput = document.querySelector('.popup__input-name');
// const editProfileFormJobInput = document.querySelector('.popup__input-job');
// const popupImageContainer = popupWithImage.querySelector('.popup-image__container');
// const popupImageName = popupWithImage.querySelector('.popup-image__name');
// const nameInput = formPopupCard.querySelector('.popup__input-title');
// const imageLinkInput = formPopupCard.querySelector('.popup__input-image');
// const profile = {
//   name: document.querySelector('.profile__title'),
//   job: document.querySelector('.profile__subtitle')
// }

// function openPopupForEditingProfile() {
//   editProfileFormNameInput.value = profile.name.textContent;
//   editProfileFormJobInput.value = profile.job.textContent;

//   openPopup(popupProfile);
// }

// function closePopupForEditingProfile() {
//   closePopup(popupProfile);
// }

// buttonOpenPopupProfile.addEventListener('click', openPopupForEditingProfile);
// closePopupProfileButton.addEventListener('click', closePopupForEditingProfile);

// openPopupCard.addEventListener('click', () => {
//   openPopup(popupCard);
// });

// closePopupCard.addEventListener('click', () => {
//   closePopup(popupCard);
// });

// function editProfile(event) {
//   event.preventDefault();

//   profile.name.textContent = editProfileFormNameInput.value;
//   profile.job.textContent = editProfileFormJobInput.value;

//   popupProfile.classList.remove('popup_opened');
// }

// editProfileForm.addEventListener('submit', editProfile);


// const initialCards = [
//   {
//     name: 'Архыз',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
//   },
//   {
//     name: 'Челябинская область',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
//   },
//   {
//     name: 'Иваново',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
//   },
//   {
//     name: 'Камчатка',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
//   },
//   {
//     name: 'Холмогорский район',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
//   },
//   {
//     name: 'Байкал',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
//   }
// ];

// function createCard(card) {
//   const contentItemTemplate = cardsContent.querySelector('#place-template').content;
//   const newCard = contentItemTemplate.querySelector('.element').cloneNode(true);
//   const image = newCard.querySelector('.element__img');
//   const title = newCard.querySelector('.element__title');
//   const likeButton = newCard.querySelector('.element__like-but');
//   const trashButton = newCard.querySelector('.element__trash-button');

//   image.alt = card.name;
//   image.src = card.link;

//   title.textContent = card.name;

//   likeButton.addEventListener('click', (event) => {
//     event.target.classList.toggle('element__like_active');
//   });

//   trashButton.addEventListener('click', (event) => {
//     event.target.closest('.element').remove();
//   });

//   image.addEventListener('click', (event) => {
//     popupImageContainer.src = event.target.src;
//     popupImageName.textContent = event.target.alt;
//     openPopup(popupWithImage);
//   });

//   return newCard;
// };

// function openPopup(popup) {
//   popup.classList.add('popup_opened');
// };

// initialCards.forEach(card => {
//   cardsContent.prepend(createCard(card));
// });

// popupCloseButtons.forEach((button) => {
//   const popup = button.closest('.popup');
//   button.addEventListener('click', () => closePopup(popup));
// });

// function closePopup(popup) {
//   popup.classList.remove('popup_opened');
// };

// function openPopup(popup) {
//   popup.classList.add('popup_opened');
// }


// document.addEventListener('keydown', function (evt) {
//   const popup = document.querySelector('.popup_opened');
//   if (evt.key === 'Escape') {
//     closePopup(popup);
//   }
// });


// document.addEventListener('click', function (evt) {
//   const popup = document.querySelector('.popup_opened');
//   if (evt.target === popup) {
//     closePopup(popup);
//   }
// })

// function closePopup(popup) {
//   popup.classList.remove('popup_opened');
// };

// function getValuesFromCreateCardPopup(event) {
//   event.preventDefault();

//   const card = {
//     name: nameInput.value,
//     link: imageLinkInput.value
//   };

//   resetInputFields(nameInput, imageLinkInput);

//   cardsContent.prepend(createCard(card));

//   popupCard.classList.remove('popup_opened');
// }

// function resetInputFields(...inputs) {
//   inputs.forEach(input => {
//     input.value = '';
//   });
// }

// formPopupCard.addEventListener('submit', getValuesFromCreateCardPopup);



// //ВАЛИДАЦИЯ ФОРМ

// function toggleButtonState(inputList, buttonElement, options) {
//   if (hasInvalidInput(inputList)) {
//     buttonElement.classList.add(options.inactiveButtonClass);
//     buttonElement.setAttribute("disabled", "disabled");
//   } else {
//     buttonElement.classList.remove(options.inactiveButtonClass);
//     buttonElement.removeAttribute("disabled");
//   }
// };

// const showError = (formElement, inputElement, errorMessage, options) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.add(options.inputErrorClass);
//   errorElement.textContent = errorMessage;
//   errorElement.classList.add(options.errorClass)
// };
// const hideError = (formElement, inputElement, options) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.remove(options.inputErrorClass);
//   errorElement.classList.remove(options.errorClass);
//   errorElement.textContent = "";
// };

// const checkInputValidity = (formElement, inputElement, options) => {
//   if (!inputElement.validity.valid) {
//     showError(formElement, inputElement, inputElement.validationMessage, options);
//   } else {
//     hideError(formElement, inputElement, options);
//   }
// };

// function hasInvalidInput(inputList) {
//   return inputList.some((inputElement) => {
//     return !inputElement.validity.valid;
//   });
// };

// const setEventListener = (formElement,options) => {
//   const inputList = Array.from(formElement.querySelectorAll(options.inputSelector));
//   const buttonElement = formElement.querySelector(options.submitButtonSelector);
//   toggleButtonState(inputList, buttonElement,options);
//   inputList.forEach((inputElement) => {
//     inputElement.addEventListener('input', function () {
//       checkInputValidity(formElement, inputElement,options);
//       toggleButtonState(inputList, buttonElement,options);
//     });
//   });
// };

// const enablevalidation = (options) => {
//   const formList = Array.from(document.querySelectorAll(options.formSelector));
//   formList.forEach((formElement) => {
//     setEventListener(formElement, options);
//   });
// };

// enablevalidation({
//   formSelector: '.popup__edit-profile',
//   inputSelector: '.popup__container-field',
//   submitButtonSelector: '.popup__container-button',
//   inactiveButtonClass: 'popup__container-button_disabled',
//   inputErrorClass: 'popup__container-field_error',
//   errorClass: 'popup__input-error_active',
// });
