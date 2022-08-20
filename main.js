// Закрытие и открытие модального окна

const openPopupProfile = document.querySelector('.profile__edit-button');
const closePopupProfile = document.querySelector('.popup__close-profile');
const popupProfile = document.querySelector('.popup-profile');

openPopupProfile.addEventListener('click', function(){
  popupProfile.classList.add('active');
})

closePopupProfile.addEventListener('click', () => {
  popupProfile.classList.remove('active');
})

//// Закрытие и открытие формы добавления карточки
const openPopupCard = document.querySelector('.profile__add-button');
const closePopupCard = document.querySelector('.popup__close-card')
const popupCard = document.querySelector('.popup-card');

openPopupCard.addEventListener('click', function(){
  popupCard.classList.add('active');
})

closePopupCard.addEventListener('click', () => {
  popupCard.classList.remove('active');
})

// Изменение страницы через PopUp

const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input-name');
const jobInput = document.querySelector('.popup__input-job');
const popupSave = document.querySelector('.popup__save-button');

function formSubmitHandler (evt) {
  evt.preventDefault();

  let profileTitle = document.querySelector('.profile__title');
  let profileSubitle = document.querySelector('.profile__subtitle');

  profileTitle.textContent = nameInput.value;
  profileSubitle.textContent = jobInput.value;

  popupSave.addEventListener('click', () => {
    popupProfile.classList.remove('active');
  })
}

formElement.addEventListener('submit', formSubmitHandler);



