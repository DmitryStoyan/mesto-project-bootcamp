// Закрытие и открытие модального окна

const openPopUp = document.querySelector('.profile__edit-button');
const closePopUp = document.querySelector('.popup__close-button');
const popUp = document.querySelector('.popup');

openPopUp.addEventListener('click', function(){
  popUp.classList.add('active');
})

closePopUp.addEventListener('click', () => {
  popUp.classList.remove('active');
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
    popUp.classList.remove('active');
  })
}

formElement.addEventListener('submit', formSubmitHandler);



