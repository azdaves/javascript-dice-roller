const diceTriggerEl = document.querySelector('.dice__trigger');
const imgTriggerEl = document.querySelector('.dice__image')

function getRandomNumber() {
  return 1 + Math.floor(Math.random() * 6);
}

function randomImage() {
diceTriggerEl.addEventListener('click', function(){
  let myRandomNumber = getRandomNumber();
  imgTriggerEl.src = "images/dice" + myRandomNumber + ".png";
})
}

randomImage()