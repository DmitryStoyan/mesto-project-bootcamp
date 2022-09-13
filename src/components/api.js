import { token, usersMeApi, cardsApi, usersMeAvatarApi, cardsLikesApi } from './constants.js';

// Обязательная конфигурация для API
const config = {
  headers: {
    authorization: token
  }
};

// Проверка ответа
export function checkResponse(response) {
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(`Ошибка ${response.status}`);
};

// Получить информацию о пользователе
export function getUserInfo() {
  return fetch(usersMeApi, config)
    .then(checkResponse)
    .then((data) => data);
}

// Получить карточки
export function getCards() {
  return fetch(cardsApi, config)
    .then(checkResponse)
    .then((data) => data);
}

// Создание карточки
export function createCard({ name, link }) {
  return fetch(cardsApi, {
    method: 'POST',
    headers: {
      ...config.headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      link: link
    })
  })
    .then(checkResponse)
    .then((data) => data);
}

// Редактирование профиля
export function editUserInfo({ name, about }) {
  return fetch(usersMeApi, {
    method: 'PATCH',
    headers: {
      ...config.headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      about: about
    })
  })
    .then(checkResponse)
    .then((data) => data);
}


// Обновление аватара пользователя
export function updateAvatar(avatar) {
  return fetch(usersMeAvatarApi, {
    method: 'PATCH',
    headers: {
      ...config.headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      avatar: avatar
    })
  })
    .then(checkResponse)
    .then((data) => data);
}


//отправка лайка
export function sendLike(cardId) {
  return fetch(`${cardsLikesApi}/${cardId}`, {
    method: 'PUT',
    headers: {
      ...config.headers,
    }
  })
    .then(checkResponse)
    .then((data) => data);
};

//снятие лайка
export function deleteLike(cardId) {
  return fetch(`${cardsLikesApi}/${cardId}`, {
    method: 'DELETE',
    headers: {
      ...config.headers,
    }
  })
    .then(checkResponse)
    .then((data) => data);
};

export function deleteCard(cardId) {
  return fetch(`${cardsApi}/${cardId}`, {
    method: 'DELETE',
    headers: {
      ...config.headers,
    }
  })
    .then(checkResponse)
    .then((data) => data);
}
