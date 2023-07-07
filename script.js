const start = document.querySelector('.start')
const timeSec = document.querySelector('.timer__inner__sec')
const timeMin = document.querySelector('.timer__inner__min')
const timeMsec = document.querySelector('.timer__inner__msec')
const timeDec = document.querySelector('.timer__inner__decor')
const pause = document.querySelector('.pause')
const save = document.querySelector('.save')
const saving = document.querySelector('.savig')

let i = 0
let j = 0
let k = 0
let m = 0

start.addEventListener('click', ()=> {
  const timerDec = setInterval(()=> {
    timeDec.textContent = ++m;
    m > 8 ? m = 0 : ''
  }, )

  const timerMsec = setInterval(()=> {
    timeMsec.textContent = ++k
    k > 8 ? k = -1: ''
  }, 100)

  const timerSec = setInterval(()=>{
    timeSec.textContent = ++i
    i > 60 ? i = -1: ''
  }, 1000)

  const timerMin = setInterval(()=>{
    timeMin.textContent = ++j
  }, 60000)
  
  pause.addEventListener('click', ()=> {
    clearInterval(timerMsec)
    clearInterval(timerSec)
    clearInterval(timerMin)
    clearInterval(timerDec)
  })

  save.addEventListener('click', ()=>{
    for(let l = 0; l < 3; l++) {
      saving.innerHTML = `${i}:${j}:${k}`
    }
  })

})

