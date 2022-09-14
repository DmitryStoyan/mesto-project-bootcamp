// Обязательная конфигурация для API
const config = {
  baseUrl: "https://nomoreparties.co/v1/wbc-cohort-1",
  headers: {
    authorization: "2a4a97ff-1e79-431a-b791-507bc640fd7b",
    "Content-type": "application/json"
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
  return fetch(config.baseUrl + "/users/me", config)
    .then(checkResponse)
    .then((data) => data);
}

// Получить карточки
export function getCards() {
  return fetch(config.baseUrl + "/cards", config)
    .then(checkResponse)
    .then((data) => data);
}

// Создание карточки
export function createCard({ name, link }) {
  return fetch(config.baseUrl + "/cards", {
    method: 'POST',
    headers: config.headers,
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
  return fetch(config.baseUrl + "/users/me", {
    method: 'PATCH',
    headers: config.headers,
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
  return fetch(config.baseUrl + "/users/me/avatar", {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: avatar
    })
  })
    .then(checkResponse)
    .then((data) => data);
}


//отправка лайка
export function sendLike(cardId) {
  return fetch(config.baseUrl + "/cards/likes/" + cardId, {
    method: 'PUT',
    headers: config.headers,
  })
    .then(checkResponse)
    .then((data) => data);
};

//снятие лайка
export function deleteLike(cardId) {
  return fetch(config.baseUrl + "/cards/likes/" + cardId, {
    method: 'DELETE',
    headers: config.headers,
  })
    .then(checkResponse)
    .then((data) => data);
};

export function deleteCard(cardId) {
  return fetch(config.baseUrl + "/cards/" + cardId, {
    method: 'DELETE',
    headers: config.headers,
  })
    .then(checkResponse)
    .then((data) => data);
}

