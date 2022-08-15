const openPopUp = document.querySelector('.profile__edit-button');
const closePopUp = document.querySelector('.popup__close-button');
const popUp = document.querySelector('.popup');

openPopUp.addEventListener('click', function(){
  popUp.classList.add('active');
})

closePopUp.addEventListener('click', () => {
  popUp.classList.remove('active');
})




const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input-name');
const jobInput = document.querySelector('.popup__input-job');

function formSubmitHandler (evt) {
  evt.preventDefault();
}
