import { hasInvalidInput } from './validate.js';
import Api from './api.js'

export function toggleButtonState(inputList, buttonElement, options) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(options.inactiveButtonClass);
    buttonElement.setAttribute("disabled", "disabled");
  } else {
    buttonElement.classList.remove(options.inactiveButtonClass);
    buttonElement.removeAttribute("disabled");
  }
};

export function resetInputFields(...inputs) {
  inputs.forEach(input => {
    input.value = '';
  });
};
