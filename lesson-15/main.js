//set interval
//setTimeout
let title = document.createElement("div");
let clock = document.createElement("div");
clock.className = "clock";
title.className = "timer";
title.innerText = "Timer:";
document.body.appendChild(title);
document.body.appendChild(clock);
console.log("clock", clock);
counter = 10;
clock.innerHTML = counter;
let int = setInterval(() => {
  counter--;
  if (counter >= 1) {
    clock.innerHTML = counter;
  } else {
    clearInterval(int);
    console.log("Interval cleared");
    clock.innerHTML = "Time is up!";
    clock.className = "clockOver";
  }
}, 1000);

//instantwebtools.net
