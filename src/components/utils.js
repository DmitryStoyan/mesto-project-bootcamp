import { hasInvalidInput } from './validate.js';

export function toggleButtonState(inputList, buttonElement, options) {
  if (hasInvalidInput(inputList)) {
    disableButton(buttonElement, options);
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

export function disableButton(button, options) {
  button.classList.add(options.inactiveButtonClass);
  button.setAttribute("disabled", "disabled");
}


