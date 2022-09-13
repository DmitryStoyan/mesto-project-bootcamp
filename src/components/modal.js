export function closePopup(popup) {
  popup.classList.remove('popup_opened');

  document.removeEventListener('keydown', () => null);
};

/**
 * @param {HTMLElement} popup
 * @param {{
 *   input: HTMLElement,
 *   value: string
 * }[]} fields
 */
export function openPopup(popup, fields = null) {
  popup.classList.add('popup_opened');

  if (fields) {
    fields.forEach((field) => {
      field.input.value = field.value;
    });
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      const popup = document.querySelector('.popup_opened');
      closePopup(popup);
    }
  });
};
