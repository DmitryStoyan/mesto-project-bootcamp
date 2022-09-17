export function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('click', closePopupOnBackgroundClick);
  document.removeEventListener('keydown', closePopupOnEscape);
};

/**
 * @param {HTMLElement} popup
 * @param {{
 *   input: HTMLElement,
 *   value: string
 * }[]} fields
 */
export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupOnEscape);
  document.addEventListener('click', closePopupOnBackgroundClick);
};

function closePopupOnEscape(event) {
  if (event.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  }
}

function closePopupOnBackgroundClick(event) {
  if (event.target.classList.contains('popup_opened')) {
    closePopup(event.target);
  }
}
