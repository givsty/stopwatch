const start = document.querySelector('.start')
const timeSec = document.querySelector('.timer__inner__sec')
const timeMin = document.querySelector('.timer__inner__min')
const timeMsec = document.querySelector('.timer__inner__msec')
const pause = document.querySelector('.pause')
const save = document.querySelector('.save')
const saving = document.querySelector('.savig')

let i = 0
let j = 0
let k = 0

start.addEventListener('click', ()=> {
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
  })

  save.addEventListener('click', ()=>{
    saving.textContent = i
  })

})

