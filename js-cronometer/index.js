const playStop = document.querySelector("#play-stop");
const reset = document.querySelector("#reset");
const cronValue = document.querySelector("#cron-value");

let [hour, min, sec] = [0, 0, 0];

let running = false;

let intervalID = null;

const formatTime = (time) => (time <= 9 ? "0" + time : time);

const increaseTime = () => {
  sec++;
  if (sec === 60) {
    min++;
    sec = 0;
    if (min === 60) {
      hour++;
      min = 0;
      sec = 0;
    }
  }
  cronValue.innerText = `${formatTime(hour)}:${formatTime(min)}:${formatTime(
    sec
  )}`;
};

const clickHandler = (e) => {
  running = !running;
  console.log(running);
  running
    ? (intervalID = setInterval(increaseTime, 1000))
    : clearInterval(intervalID);
};

playStop.addEventListener("click", clickHandler);
reset.addEventListener("click", () => {
  [hour, min, sec] = [0, 0, 0];
  cronValue.innerText = `${formatTime(hour)}:${formatTime(min)}:${formatTime(
    sec
  )}`;
});
