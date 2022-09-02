const editPopupProfileButton = document.querySelector('.profile__edit-button');
const closePopupProfileButton = document.querySelector('.popup__close-profile');

const openPopupCard = document.querySelector('.profile__add-button');
const closePopupCard = document.querySelector('.popup__close-card');

const popupProfile = document.querySelector('.popup-profile');
const popupCard = document.querySelector('.popup-card');
const popupCloseButton = document.querySelectorAll('.popup__close-button');

const editProfileForm = document.querySelector('.popup-profile__form');
const formPopupCard = document.querySelector('.popup-card__form');

const cardsContent = document.querySelector('.elements');
const popupWithImage = document.querySelector('.popup-image');

const editProfileFormNameInput = document.querySelector('.popup__input-name');
const editProfileFormJobInput = document.querySelector('.popup__input-job');

const profile = {
  name: document.querySelector('.profile__title'),
  job: document.querySelector('.profile__subtitle')
}

function openPopupForEditingProfile() {
  editProfileFormNameInput.value = profile.name.textContent;
  editProfileFormJobInput.value = profile.job.textContent;

  openPopup(popupProfile);
}

function closePopupForEditingProfile() {
  closePopup(popupProfile);
}

editPopupProfileButton.addEventListener('click', openPopupForEditingProfile);
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


const initialCards = [
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

function createCard(card) {
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
    popupWithImage.querySelector('.popup-image__container').src = event.target.src;
    popupWithImage.querySelector('.popup-image__name').textContent = event.target.alt;
    openPopup(popupWithImage);
  });

  return newCard;
};

function openPopup(popup) {
  popup.classList.add('popup_opened');
};

initialCards.forEach(card => {
  cardsContent.prepend(createCard(card));
});

popupCloseButton.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

function closePopup(popup) {
  popup.classList.remove('popup_opened');
};

function openPopup(popup) {
  popup.classList.add('popup_opened');
}


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

function closePopup(popup) {
  popup.classList.remove('popup_opened');
};

function getValuesFromCreateCardPopup(event) {
  event.preventDefault();

  const nameInput = formPopupCard.querySelector('.popup__input-title');
  const imageLinkInput = formPopupCard.querySelector('.popup__input-image');
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

formPopupCard.addEventListener('submit', getValuesFromCreateCardPopup);
