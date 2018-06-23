function setCurrentHour() {
  const now = new Date,
        seconds = now.getSeconds(),
        minutes = now.getMinutes(),
        hours = now.getHours(),
        secondsDegrees = (seconds / 60) * 360 + 90,
        minutesDegrees = (minutes / 60) * 360 + 90,
        hoursDegrees = (hours / 12) * 360 + 90,
        secondHand = document.querySelector('.second-hand'),
        minuteHand = document.querySelector('.min-hand'),
        hourHand = document.querySelector('.hour-hand'),
        hands = document.querySelectorAll('.hand');

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  if (seconds === 0) {
    hands.forEach(hand => hand.style.transition = `all 0s`);
  } else {
    hands.forEach(hand => hand.style.transition = `all 0.1s`);
  }
}

setInterval(setCurrentHour, 1000);