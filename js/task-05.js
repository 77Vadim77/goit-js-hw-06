const inputname = document.querySelector('#name-input')
const span = document.querySelector('#name-output')

inputName.addEventListener('input', inputTextHandler);

function inputTextHandler() {
    if (inputName.value !== " ") {
    return span.innerHTMl = inputName.value
  }    
};

