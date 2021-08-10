// const refs = {
//   start: document.querySelector('#start'),
//   stop: document.querySelector('#stop'),
//   seconds: document.querySelector('#seconds'),
//   minutes: document.querySelector('#minutes'),
// };

// function calc() {
//   const currentDate = Date.now();
//   const delta = (currentDate - startDate) / 1000;
//   const sec = Math.floor(delta % 60);
//   const mins = Math.floor(delta / 60);
//   refs.seconds.textContent = sec < 10 ? `0${sec}` : sec;
//   refs.minutes.textContent = mins < 10 ? `0${mins}` : mins;
// }

// let id = null;
// let startDate = null;

// function timerStart() {
//   startDate = Date.now();
//   id = setInterval(calc, 1000);
//   console.log(startDate);
// }

//таймер - дедлайн вместо старта от дедлайна отнять текущую

// function timerStop() {
//   clearInterval(id);
// }

// refs.start.addEventListener('click', timerStart);
// refs.stop.addEventListener('click', timerStop);

class StopWatch {
  constructor() {
    this.refs = {
      start: document.querySelector('#start'),
      stop: document.querySelector('#stop'),
      seconds: document.querySelector('#seconds'),
      minutes: document.querySelector('#minutes'),
    };
    this.id = null;
    this.startDate = null;
  }
  calc = () => {
    const currentDate = Date.now();
    const delta = (currentDate - this.startDate) / 1000;
    const sec = Math.floor(delta % 60);
    const mins = Math.floor(delta / 60);
    this.refs.seconds.textContent = sec < 10 ? `0${sec}` : sec;
    this.refs.minutes.textContent = mins < 10 ? `0${mins}` : mins;
  };

  timerStart = () => {
    this.startDate = Date.now();
    this.id = setInterval(this.calc, 1000);
  };
  timerStop = () => {
    clearInterval(this.id);
  };

  //  стрелка привязывает вместо bind

  init() {
    this.refs.start.addEventListener('click', this.timerStart);
    this.refs.stop.addEventListener('click', this.timerStop);
  }
}
const watch = new StopWatch();
watch.init();
