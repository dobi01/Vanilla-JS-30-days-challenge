function playSound(item) {
  item.play();
  item.currentTime = 0;
}

function keyOn(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`),
        key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  
  if (!audio) return;
  playSound(audio);
  
  key.classList.add('playing');
}

function keyOff(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', keyOff));

function clickOn() {
  const key = this.dataset.key,
        audio = document.querySelector(`audio[data-key="${key}"]`),
        item = this;
  
  playSound(audio);
  
  item.classList.add('playing');
}

function clickOff() {
  this.classList.remove('playing');
}

window.addEventListener('keydown', keyOn);
keys.forEach(key => key.addEventListener('mousedown', clickOn));
keys.forEach(key => key.addEventListener('mouseup', clickOff));