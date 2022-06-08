//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomNumber (min, max) {
  if (min>=0 && min < max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
    alert ('Что то полшло не так, проверьте данные');
    return 'Что то полшло не так, проверьте данные';
    }
}

function verifyStringLenght (string, lenght) {
let verify
  if (string.lenght <= lenght) {
    verify = true;
  } else {
    verify = false;  
  }
  console.log(verify);
}
    
