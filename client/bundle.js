(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const fn = require('./funcs')

const emailInput = document.querySelector('#form-email-input')
const emailLabel = document.querySelector('.form-email-label')
const passwordInput = document.querySelector('#form-password-input')
const passwordLabel = document.querySelector('.form-password-label')

const nameInput = document.querySelector('#form-name-input-signup')
const nameLabel = document.querySelector('.form-name-label-signup')
const emailInputSignup = document.querySelector('#form-email-input-signup')
const emailLabelSignup = document.querySelector('.form-email-label-signup')
const passwordInputSignup = document.querySelector(
  '#form-password-input-signup'
)
const passwordLabelSignup = document.querySelector(
  '.form-password-label-signup'
)

const regBtn = document.querySelector('#form-reg-btn')
const logBtn = document.querySelector('#form-log-btn')

const modal = document.querySelector('.modal')
const modalLogin = document.querySelector('.modal-login')
const modalSignup = document.querySelector('.modal-signup')

const authBtn = document.querySelector('#auth')
const wrapper = document.querySelector('#wrapper')

const loginSendBtn = document.querySelector('#form-button')
loginSendBtn.addEventListener('click', loginSendData)
const registerSendBtn = document.querySelector('#form-button-signup')
registerSendBtn.addEventListener('click', registerSendData)

toggleLabelShift(emailInput, emailLabel, 'move-up')
toggleLabelShift(passwordInput, passwordLabel, 'move-up')
toggleLabelShift(nameInput, nameLabel, 'move-up')
toggleLabelShift(emailInputSignup, emailLabelSignup, 'move-up')
toggleLabelShift(passwordInputSignup, passwordLabelSignup, 'move-up')

function toggleLabelShift(input, label, classRef) {
  input.addEventListener('input', () => {
    // console.log(emailInput.value);
    if (input.value) {
      label.classList.add(classRef)
    } else {
      label.classList.remove(classRef)
    }
  })
}

regBtn.addEventListener('click', () => {
  modalSignup.classList.add('rotate-signup')
  modalLogin.classList.add('rotate-login')
})

logBtn.addEventListener('click', () => {
  modalSignup.classList.remove('rotate-signup')
  modalLogin.classList.remove('rotate-login')
})

authBtn.addEventListener('click', () => {
  if (modal.classList.contains('disabled')) {
    modal.classList.remove('disabled')
  }
})

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.add('disabled')
  }
})

// ------------ selection actions ------------------- //

const section1 = document.querySelector('.section1')
const sel1 = document.querySelector('#selection-1')
const sel2 = document.querySelector('#selection-2')
const sel3 = document.querySelector('#selection-3')
const sel4 = document.querySelector('#selection-4')

function displayInitialHomepage() {
  section1.innetHTML =
    '<h3>Welcome to Atomic Addicts!</h3> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porta posuere convallis. Aenean luctus velit in urna dictum sodales. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut porttitor eu ligula posuere sollicitudin.</p><p> Donec posuere urna odio, id tempus risus bibendum in. Pellentesque non metus maximus, suscipit nisl vitae, condimentum lorem. Ut pellentesque accumsan turpis at euismod. Integer auctor, nunc id vulputate mollis, libero massa lobortis urna, nec mollis tortor massa ut dolor.</p> <p>Curabitur iaculis suscipit sapien, at suscipit est tempus in. Donec consequat et nisl sed sodales. Duis egestas sapien eget nulla porta pellentesque. Fusce tincidunt tortor elit, et eleifend nisi tincidunt quis. Praesent ipsum sem, ornare eget rutrum et, lobortis vel nisi. Donec tempus viverra libero et condimentum. Donec lobortis scelerisque aliquet. Cras at iaculis diam, quis venenatis nisi.</p>'
}

// FETCHING FUNCTIONS
async function loginSendData() {
  const url = `http://localhost:3000/auth/login`
  const email = emailInput.value
  const password = passwordInput.value

  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const data = await response.json()
  console.log('app.js - data received from server after logging in: ', data)
  emailInput.value = ''
  passwordInput.value = ''
  modal.classList.add('disabled')
}

async function registerSendData() {
  const url = `http://localhost:3000/auth/register`

  const username = nameInput.value
  const email = emailInputSignup.value
  const password = passwordInputSignup.value

  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({ username, email, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const data = await response.json()
  console.log('app.js - data received from server after registering in: ', data)
  nameInput.value = ''
  emailInputSignup.value = ''
  passwordInputSignup.value = ''
  modal.classList.add('disabled')
}

},{"./funcs":2}],2:[function(require,module,exports){
// ************** start of Utils ********** //

const homepage = document.querySelector('#home')
const metricspage = document.querySelector('#metrics')
const habitspage = document.querySelector('#habits')

const pageDict = {
  'selection-1': homepage,
  'selection-2': metricspage,
  'selection-3': habitspage,
}

window.onload = () => {
  const buttons = document.querySelectorAll('.sel-btn')
  buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      renderSelectedPage(e)
    })
  })
}

// Main Page ////////////////////////////////

function renderSelectedPage(e) {
  const btnClicked = e.currentTarget.parentElement.id
  // console.log(
  //   '[before switch case, parent] you clicked: ',
  //   e.currentTarget.parentElement.id
  // )
  // e.currentTarget.parentElement bypasses the 'i' to 'a' and then goes to the div with an id of 'selection-n'
  switch (btnClicked) {
    case 'selection-1':
      // console.log('btnClicked: ', btnClicked)
      // console.log('clicked the home button', pageDict[btnClicked])
      displayPage(pageDict[btnClicked])
      break
    case 'selection-2':
      // console.log('clicked the metrics button')
      displayPage(pageDict[btnClicked])
      break
    case 'selection-3':
      // console.log('clicked the habits button')
      displayPage(pageDict[btnClicked])
      break
    case 'selection-4':
      // console.log('clicked the other button')
      // displayPage(pageDict[btnClicked])
      break
  }
}
// every page apart from the homepage should start with a class of 'disabled'
function displayPage(requestedPage) {
  // console.log('requested page ***** ', requestedPage)

  const availablePages = [homepage, metricspage, habitspage]

  populatePage(requestedPage)

  availablePages.forEach((page) => {
    if (page.id === requestedPage.id) {
      // console.log(`page is`, page)
      // console.log(` and requestedpage is`, requestedPage)
      page.classList.remove('disabled')
      // console.log(` (after) and requestedpage is`, requestedPage)
    } else {
      page.classList.add('disabled')
      // console.log(` other page 1 :`, homepage)
      // console.log(` other page 2 :`, metricspage)
      // console.log(` other page 3 :`, habitspage)
    }
  })
}

function populatePage(requestedPage) {
  // const availablePages = [homepage, metricspage, habitspage]
  console.log('populatePage - requestedPage -> ', requestedPage.id)
  switch (requestedPage.id) {
    case 'home':
      console.log('Populating the Homepage')
      break
    case 'metrics':
      console.log('Populating the Metricspage')
      createMetricsWrapper()
      break
    case 'habits':
      console.log('Populating the Habitspage')
      createHabitsWrapper()
      break
    default:
      console.log('Not sure what page I should populate')
  }
}

// ******** end of utils ************ //
// ********* start of habits ********** //
async function createHabitsWrapper() {
  // wipe the habits page
  habitspage.innerHTML = ''

  // create the wrapper to be added to the page section
  const frame = document.createElement('div')
  frame.classList.add('habitsWrapper')

  //
  // create the top container for the date and button to manage habits
  const topContainer = document.createElement('div')
  topContainer.classList.add('habitsTopContainer')
  frame.append(topContainer)

  // create the element for the date
  const newDate = new Date()
  const today = `${newDate.getDate()}-${
    newDate.getMonth() + 1
  }-${newDate.getFullYear()}`

  const habitsDate = document.createElement('div')
  habitsDate.classList.add('habitsDate')
  habitsDate.textContent = today
  topContainer.append(habitsDate)

  // create the element for the button
  const habitsManageBtn = document.createElement('div')
  habitsManageBtn.classList.add('habitsManageBtn')
  habitsManageBtn.innerHTML =
    '<a href="#" class="habitsManageBtnAnchor"> <i class="fa-solid fa-list-check"></i> </a>'
  habitsManageBtn.addEventListener('click', openHabitsModal)
  topContainer.append(habitsManageBtn)

  //
  // create the container for the list of tacked habits
  const habitsTrackedList = document.createElement('div')
  habitsTrackedList.classList.add('habitsTrackedList')
  habitsTrackedList.textContent = ''
  frame.append(habitsTrackedList)

  // fetch Data

  const username = 'igormirowski'
  const userOneData = await getTrackingData(username)
  // console.log('Tracking - userOneData -> ', userOneData)

  // create the habits cards
  createAndAppendCards(userOneData, habitsTrackedList)

  // append the frame to the habits section (id=habits, habitspage)
  habitspage.append(frame)
}

// call the modal for managing the Habits
function openHabitsModal() {
  const url = `http://localhost:3000/trackings/`

  // console.log('Inside openHabitsModal!')
  const habitsModal = document.querySelector('.habits-modal')
  if (habitsModal.classList.contains('disabled')) {
    habitsModal.classList.remove('disabled')
  }

  const habitsModalSubmitBtn = document.querySelector('#habits-submit-button')
  habitsModalSubmitBtn.addEventListener('click', async () => {
    // dismiss modal
    habitsModal.classList.add('disabled')

    console.log('modal should be disabled ', habitsModal)
    console.log('modal button ', habitsModalSubmitBtn)
    console.log('use fetch to send POST request to the DB to save the data')

    const habitsData = {
      trackSleep: document.querySelector('#checkbox-sleep').checked,
      trackSleepHours: document.querySelector('#habits-form-sleep-hours').value,
      trackExercise: document.querySelector('#checkbox-exercise').checked,
      trackExerciseTimesPerWeek: document.querySelector(
        '#habits-form-exercise-times'
      ).value,
      trackWater: document.querySelector('#checkbox-water').checked,
      trackWaterDailyGlasses: document.querySelector(
        '#habits-form-water-glasses'
      ).value,
      trackSmoking: document.querySelector('#checkbox-smoking').checked,
      trackSmokingDailyCigarettes: document.querySelector(
        '#habits-form-smoking-cigarettes'
      ).value,
      trackSavings: document.querySelector('#checkbox-savings').checked,
      trackSavingsDaily: document.querySelector('#habits-form-money-daily')
        .value,
    }

    console.log(habitsData)
    // POST REQUEST then UPDATE PAGE calling createHabitsWrapper()

    const response = await fetch(url, {
      method: 'PUT',
      body: JSON.stringify(habitsData),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const data = await response.json()

    console.log(
      'habits.js - response from sending the tracked data: possibly missing :username from the url of the route as using req.params serverside, however if implementing auth might not be needed anymore',
      data
    )
  })
}

// fetch the data for the habits
async function getTrackingData(username) {
  const url = `http://localhost:3000/trackings/current/` + username

  const response = await fetch(url)
  const data = await response.json()
  // during testing, get the first user's data
  const dataFirstUser = data
  // console.log('************** ', dataFirstUser)
  return dataFirstUser
}

// ************** end of habits **************** //
// *************** start of habitsCards ************** //
// create and append the cards to the Habits List element
function createAndAppendCards(data, targetElem) {
  if (data.sleep_track) {
    const sleepCard = document.createElement('div')
    sleepCard.classList.add('habitsCard', 'habitsSleepCard')

    const sleepCardTitle = document.createElement('div')
    sleepCardTitle.classList.add('habitsCardTitle', 'habitsSleepCardTitle')
    sleepCardTitle.textContent = 'Sleep'
    sleepCard.append(sleepCardTitle)

    const sleepCardTarget = document.createElement('div')
    sleepCardTarget.classList.add('habitsCardTarget', 'habitsSleepCardTarget')
    sleepCardTarget.textContent = data.sleep_goal
    sleepCard.append(sleepCardTarget)

    const sleepCardBtn = document.createElement('div')
    sleepCardBtn.classList.add('habitsCardBtn', 'habitsSleepCardBtn')
    sleepCardBtn.innerHTML = '<i class="fa-solid fa-thumbs-down"></i>'
    sleepCardBtn.addEventListener('click', () =>
      toggleBtn(sleepCardBtn, 'sleep')
    )
    sleepCard.append(sleepCardBtn)

    targetElem.append(sleepCard)
  }

  if (data.exercise_track) {
    const exerciseCard = document.createElement('div')
    exerciseCard.classList.add('habitsCard', 'habitsExerciseCard')

    const exerciseCardTitle = document.createElement('div')
    exerciseCardTitle.classList.add(
      'habitsCardTitle',
      'habitsExerciseCardTitle'
    )
    exerciseCardTitle.textContent = 'Exercise'
    exerciseCard.append(exerciseCardTitle)

    const exerciseCardTarget = document.createElement('div')
    exerciseCardTarget.classList.add(
      'habitsCardTarget',
      'habitsExerciseCardTarget'
    )
    exerciseCardTarget.textContent = data.exercise_goal
    exerciseCard.append(exerciseCardTarget)

    const exerciseCardBtn = document.createElement('div')
    exerciseCardBtn.classList.add('habitsCardBtn', 'habitsExerciseCardBtn')
    exerciseCardBtn.innerHTML = '<i class="fa-solid fa-thumbs-down"></i>'
    exerciseCardBtn.addEventListener('click', () =>
      toggleBtn(exerciseCardBtn, 'exercise')
    )
    exerciseCard.append(exerciseCardBtn)

    targetElem.append(exerciseCard)
  }

  if (data.water_track) {
    const waterCard = document.createElement('div')
    waterCard.classList.add('habitsCard', 'habitsWaterCard')

    const waterCardTitle = document.createElement('div')
    waterCardTitle.classList.add('habitsCardTitle', 'habitsWaterCardTitle')
    waterCardTitle.textContent = 'Water'
    waterCard.append(waterCardTitle)

    const waterCardTarget = document.createElement('div')
    waterCardTarget.classList.add('habitsCardTarget', 'habitsWaterCardTarget')
    waterCardTarget.textContent = data.water_goal
    waterCard.append(waterCardTarget)

    const waterCardBtn = document.createElement('div')
    waterCardBtn.classList.add('habitsCardBtn', 'habitsWaterCardBtn')

    const waterBtnContainer = document.createElement('div')
    waterBtnContainer.classList.add('habitsBtnContainer')
    const waterMinusBtn = document.createElement('div')
    waterMinusBtn.classList.add('habitsMinusBtn')
    waterMinusBtn.textContent = '-'
    waterMinusBtn.addEventListener('click', () =>
      adjustCounter('water', 'decrease')
    )
    waterBtnContainer.append(waterMinusBtn)

    const waterCurrentBtn = document.createElement('div')
    waterCurrentBtn.classList.add('habitsCurrentBtn')
    // serverside: need the current water intake, need a JOIN with another table
    waterCurrentBtn.textContent = data.water_entry || 0
    waterBtnContainer.append(waterCurrentBtn)

    const waterPlusBtn = document.createElement('div')
    waterPlusBtn.classList.add('habitsPlusBtn')
    waterPlusBtn.textContent = '+'
    waterPlusBtn.addEventListener('click', () =>
      adjustCounter('water', 'increase')
    )
    waterBtnContainer.append(waterPlusBtn)

    waterCard.append(waterBtnContainer)
    targetElem.append(waterCard)
  }

  if (data.smoking_track) {
    const smokingCard = document.createElement('div')
    smokingCard.classList.add('habitsCard', 'habitsSmokingCard')

    const smokingCardTitle = document.createElement('div')
    smokingCardTitle.classList.add('habitsCardTitle', 'habitsSmokingCardTitle')
    smokingCardTitle.textContent = 'Smoking'
    smokingCard.append(smokingCardTitle)

    const smokingCardTarget = document.createElement('div')
    smokingCardTarget.classList.add(
      'habitsCardTarget',
      'habitsSmokingCardTarget'
    )
    smokingCardTarget.textContent = data.smoking_goal
    smokingCard.append(smokingCardTarget)

    const smokingCardBtn = document.createElement('div')
    smokingCardBtn.classList.add('habitsCardBtn', 'habitsSmokingCardBtn')

    const smokingBtnContainer = document.createElement('div')
    smokingBtnContainer.classList.add('habitsBtnContainer')
    const smokingMinusBtn = document.createElement('div')
    smokingMinusBtn.classList.add('habitsMinusBtn')
    smokingMinusBtn.textContent = '-'
    smokingMinusBtn.addEventListener('click', () =>
      adjustCounter('smoking', 'decrease')
    )
    smokingBtnContainer.append(smokingMinusBtn)

    const smokingCurrentBtn = document.createElement('div')
    smokingCurrentBtn.classList.add('habitsCurrentBtn')
    // serverside: need the current water intake, need a JOIN with another table
    smokingCurrentBtn.textContent = data.smoking_entry || 0
    smokingBtnContainer.append(smokingCurrentBtn)

    const smokingPlusBtn = document.createElement('div')
    smokingPlusBtn.classList.add('habitsPlusBtn')
    smokingPlusBtn.textContent = '+'
    smokingPlusBtn.addEventListener('click', () =>
      adjustCounter('smoking', 'increase')
    )
    smokingBtnContainer.append(smokingPlusBtn)

    smokingCard.append(smokingBtnContainer)
    targetElem.append(smokingCard)
  }

  if (data.money_track) {
    const moneyCard = document.createElement('div')
    moneyCard.classList.add('habitsCard', 'habitsMoneyCard')

    const moneyCardTitle = document.createElement('div')
    moneyCardTitle.classList.add('habitsCardTitle', 'habitsMoneyCardTitle')
    moneyCardTitle.textContent = 'Money'
    moneyCard.append(moneyCardTitle)

    const moneyCardTarget = document.createElement('div')
    moneyCardTarget.classList.add('habitsCardTarget', 'habitsMoneyCardTarget')
    moneyCardTarget.textContent = data.money_goal
    moneyCard.append(moneyCardTarget)

    const moneyCardBtn = document.createElement('div')
    moneyCardBtn.classList.add('habitsCardBtn', 'habitsMoneyCardBtn')

    const moneyBtnContainer = document.createElement('div')
    moneyBtnContainer.classList.add('habitsBtnContainer')
    const moneyMinusBtn = document.createElement('div')
    moneyMinusBtn.classList.add('habitsMinusBtn')
    moneyMinusBtn.textContent = 'REMOVE'
    moneyMinusBtn.addEventListener('click', () =>
      adjustCounter('money', 'decrease', moneyCurrentBtn.value)
    )
    moneyBtnContainer.append(moneyMinusBtn)

    const moneyCurrentBtn = document.createElement('input')
    moneyCurrentBtn.classList.add('habitsCurrentBtn')
    // serverside: need the current water intake, need a JOIN with another table
    moneyCurrentBtn.value = 0
    moneyBtnContainer.append(moneyCurrentBtn)

    const moneyPlusBtn = document.createElement('div')
    moneyPlusBtn.classList.add('habitsPlusBtn')
    moneyPlusBtn.textContent = 'ADD'
    moneyPlusBtn.addEventListener('click', () =>
      adjustCounter('money', 'increase', moneyCurrentBtn.value)
    )
    moneyBtnContainer.append(moneyPlusBtn)

    moneyCard.append(moneyBtnContainer)
    targetElem.append(moneyCard)
  }
}

// Utility functions ///////////////////

function toggleBtn(btnRef, activity) {
  const url = `http://localhost:3000/entries/${activity}`

  console.log('btnRef -> ', btnRef)
  if (btnRef.innerHTML.match(/fa-thumbs-down/i)) {
    // commented out as want the button to reflect the db state
    btnRef.innerHTML = '<i class="fa-solid fa-thumbs-up"></i>'
    // send update to the server
    console.log(
      `TODO: endpoint and token -  PATCH:  ${activity} has been marked as DONE`
    )

    // TODO Add token and Amend endpoint
    fetch(url, {
      method: 'PATCH',
      body: JSON.stringify({ value: true }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    // refresh the page by calling the following function
    // createHabitsWrapper()
  } else {
    // btnRef.innerHTML = '<i class="fa-solid fa-thumbs-down"></i>'
    // send update to the server
    console.log(
      `TODO: endpoint and token - PATCH: ${activity} has been marked as UNDONE`
    )

    // TODO Add token and Amend endpoint
    fetch(url, {
      method: 'PATCH',
      body: JSON.stringify({ value: false }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    // refresh the page by calling the following function
    createHabitsWrapper()
  }
}

function adjustCounter(activity, operation, amount = 1) {
  const username = 'igormirowski'
  const url = `http://localhost:3000/entries/${operation}/${activity}/${username}`
  console.log('TODO: add token and amend endpoint - fetch PATCH ')
  console.log(
    `activity: ${activity}, operation: ${operation}, amount: ${amount}`
  )

  fetch(url, {
    method: 'PATCH',
    body: JSON.stringify({ value: amount }),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  // call createHabitsWrapper to update the view and maintain
  // one Source of Truth
}
// *************** end of habitsCards **************** //
// **************** start of metrics ***************** //
function createMetricsWrapper() {
  // wipe the habits page
  metricspage.innerHTML = ''

  // HARDCODED USER
  const user = 'igormirowski'

  createHabitsSelectionBar(metricspage, user)
  createCalendar(metricspage, user)

  // will pass it the metrics when available as a second argument
}

async function createCalendar(targetElement, user, endpoint = 'all') {
  const url = `http://localhost:3000/entries/calendar/${endpoint}/${user}`
  const response = await fetch(url)
  const data = await response.json()
  console.log('28 days data ', data)

  const daysOfTheWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const { numberOfDays, dayOfLastMonth, dayOfWeekLastMonthNumber } =
    getNumberOfDaysLastMonth()
  // console.log(numberOfDays)
  // console.log(dayOfLastMonth)
  const now = new Date()
  const today = now.getDate()
  const daysToSkip = now.getDay() + 1
  const thisMonth = getMonthString()

  const calendarWrapper = document.createElement('div')
  calendarWrapper.classList.add('calendar-wrapper')

  const calendarMonth = document.createElement('div')
  calendarMonth.classList.add('calendar-month')
  calendarMonth.textContent = thisMonth
  calendarWrapper.append(calendarMonth)

  const calendarDaysWrapper = document.createElement('div')
  calendarDaysWrapper.classList.add('calendar-days-wrapper')
  daysOfTheWeek.forEach((nameOfDay) => {
    const day = document.createElement('div')
    day.classList.add('calendar-day-name', 'calendar-day')
    day.textContent = nameOfDay
    calendarDaysWrapper.append(day)
  })

  let j = dayOfLastMonth
  let colourIndex = 0
  // console.log('dayOfLastMonth ', dayOfLastMonth)
  for (let i = 1; i <= 35; i++) {
    // console.log('j ', j)
    const day = document.createElement('div')
    day.classList.add('calendar-day-number', 'calendar-day')
    if (i > daysToSkip) {
      if (data[colourIndex] === 1) {
        day.style.backgroundColor = '#e56b6f'
        day.style.color = 'white'
        day.style.border = 'none'
      }
      if (data[colourIndex] === 2) {
        day.style.backgroundColor = '#57cc99'
        day.style.color = 'white'
        day.style.border = 'none'
      }
      colourIndex++
    }

    // console.log('aaaaaa ', dayOfWeekLastMonthNumber)
    if (j > numberOfDays) j = 1

    if (i > dayOfWeekLastMonthNumber + 1 && i <= dayOfLastMonth + 28) {
      // console.log('****', 28 + dayOfWeekLastMonthNumber)
      if (j === today) {
        day.style.fontWeight = 'bold'
        day.style.color = 'black'
        day.style.fontSize = '20px'
      }
      day.textContent = j++
    }
    calendarDaysWrapper.append(day)
  }

  calendarWrapper.append(calendarDaysWrapper)
  targetElement.append(calendarWrapper)
}

function getNumberOfDaysLastMonth() {
  const now = new Date()
  const month = now.getMonth()
  // console.log(month)

  const year = now.getFullYear()
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0

  let numberOfDays
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      numberOfDays = 31
      break
    case 4:
    case 6:
    case 9:
    case 11:
      numberOfDays = 30
      break
    case 2:
      if (isLeapYear) {
        numberOfDays = 29
      } else {
        numberOfDays = 28
      }
    default:
      console.log('Something went wrong getting the days of the month...')
  }

  const { dayOfLastMonth, dayOfWeekLastMonthNumber } = getLastMonthDay()

  return {
    numberOfDays,
    dayOfLastMonth,
    dayOfWeekLastMonthNumber,
  }
}

function getLastMonthDay(date = new Date()) {
  const lastMonth = new Date(date.getTime())
  lastMonth.setDate(date.getDate() - 28)
  const dayOfLastMonth = lastMonth.getDate() + 1
  const dayOfWeekLastMonthNumber = lastMonth.getDay()
  return { dayOfLastMonth, dayOfWeekLastMonthNumber }
}

function getMonthString() {
  const now = new Date()
  const month = now.getMonth() + 1

  switch (month) {
    case 1:
      return 'January'
      break
    case 2:
      return 'February'
      break
    case 3:
      return 'March'
      break
    case 4:
      return 'April'
      break
    case 5:
      return 'May'
      break
    case 6:
      return 'June'
      break
    case 7:
      return 'July'
      break
    case 8:
      return 'August'
      break
    case 9:
      return 'September'
      break
    case 10:
      return 'October'
      break
    case 11:
      return 'November'
      break
    case 12:
      return 'December'
      break
    default:
      console.log('Something went wrong getting the month...')
  }
}

// Create the bar at the top of the calendar that allows the user to
// select which habits to show
// async function createHabitsSelectionBar(targetElement, user) {
//   // chartWrapper will have the chart with the habit's data
//   const chartWrapper = document.createElement('div')
//   chartWrapper.classList.add('metricsChartWrapper')

//   const iconsDict = {
//     exerciseSelBtn: 'fa-football',
//     sleepSelBtn: 'fa-bed',
//     moneySelBtn: 'fa-coins',
//     smokingSelBtn: 'fa-smoking',
//     waterSelBtn: 'fa-faucet-drip',
//   }

//   // selectionBarWrapper will have the buttons to select which
//   // habit to show
//   const selectionBarWrapper = document.createElement('div')
//   selectionBarWrapper.classList.add('selectionBarWrapper')

//   const trackingData = await getTrackingData(user)
//   console.log('trackingData -> ', trackingData)

//   for (let habit in trackingData) {
//     if (
//       trackingData[habit] &&
//       habit.includes('_track') &&
//       trackingData[habit] === true
//     ) {
//       console.log('*=*=* ', habit.includes('_track'))

//       const btnClassName = habit.split('_track')[0].concat('SelBtn')
//       const newBtn = document.createElement('div')
//       newBtn.classList.add(btnClassName, 'metricsSelBtn')
//       newBtn.innerHTML = `<i class="fa-solid ${iconsDict[btnClassName]}"></i>`

//       newBtn.addEventListener('click', () => {
//         // 1. fetch data for this specific habit
//         console.log('Will populate the chart here')
//         // 2. populate the chart
//         chartWrapper.innerHTML = ''

//         const chartElement = document.createElement('div')
//         chartElement.classList.add('chartElement')
//         chartWrapper.append(chartElement)

//         console.log('AAA', this)
//       })

//       selectionBarWrapper.append(newBtn)
//       console.log(btnClassName)
//     }
//   }

//   targetElement.append(selectionBarWrapper)
//   targetElement.append(chartWrapper)
// }

async function createHabitsSelectionBar(targetElement, user) {
  // chartWrapper will have the chart with the habit's data
  const chartWrapper = document.createElement('div')
  chartWrapper.classList.add('metricsChartWrapper')

  const streakWrapper = document.createElement('div')
  streakWrapper.classList.add('streakWrapper')
  chartWrapper.append(streakWrapper)

  const streakWrapperTitle = document.createElement('div')
  streakWrapperTitle.classList.add('streakWrapperTitle')
  streakWrapperTitle.textContent = 'Streak'
  streakWrapper.append(streakWrapperTitle)

  const streakWrapperValue = document.createElement('div')
  streakWrapperValue.classList.add('streakWrapperValue')
  streakWrapper.append(streakWrapperValue)

  const chartFrame = document.createElement('div')
  chartFrame.classList.add('chartFrame', 'ct-chart')
  chartWrapper.append(chartFrame)

  // selectionBarWrapper will have the buttons to select which
  // habit to show
  const selectionBarWrapper = document.createElement('div')
  selectionBarWrapper.classList.add('selectionBarWrapper')

  const metricsAllBtn = document.createElement('div')
  metricsAllBtn.classList.add('metricsBtn', 'metricsAllBtn')
  metricsAllBtn.innerHTML = `<i class="fa-solid fa-globe"></i>`
  metricsAllBtn.addEventListener('click', () => {
    metricsUpdateStreak(streakWrapperValue, 'all', user)
    metricsUpdateChart('.chartFrame', 'all', user)
  })

  const metricsSleepBtn = document.createElement('div')
  metricsSleepBtn.classList.add('metricsBtn', 'metricsSleepBtn')
  metricsSleepBtn.innerHTML = `<i class="fa-solid fa-bed"></i>`
  metricsSleepBtn.addEventListener('click', () => {
    metricsUpdateStreak(streakWrapperValue, 'sleep', user)
    metricsUpdateChart('.chartFrame', 'sleep', user)
  })

  const metricsExerciseBtn = document.createElement('div')
  metricsExerciseBtn.classList.add('metricsBtn', 'metricsExerciseBtn')
  metricsExerciseBtn.innerHTML = `<i class="fa-solid fa-football"></i>`
  metricsExerciseBtn.addEventListener('click', () => {
    metricsUpdateStreak(streakWrapperValue, 'exercise', user)
    metricsUpdateChart('.chartFrame', 'exercise', user)
  })

  const metricsWaterBtn = document.createElement('div')
  metricsWaterBtn.classList.add('metricsBtn', 'metricsWaterBtn')
  metricsWaterBtn.innerHTML = `<i class="fa-solid fa-faucet-drip"></i>`
  metricsWaterBtn.addEventListener('click', () => {
    metricsUpdateStreak(streakWrapperValue, 'water', user)
    metricsUpdateChart('.chartFrame', 'water', user)
  })

  const metricsSmokingBtn = document.createElement('div')
  metricsSmokingBtn.classList.add('metricsBtn', 'metricsSmokingBtn')
  metricsSmokingBtn.innerHTML = `<i class="fa-solid fa-smoking"></i>`
  metricsSmokingBtn.addEventListener('click', () => {
    metricsUpdateStreak(streakWrapperValue, 'smoking', user)
    metricsUpdateChart('.chartFrame', 'smoking', user)
  })

  const metricsMoneyBtn = document.createElement('div')
  metricsMoneyBtn.classList.add('metricsBtn', 'metricsMoneyBtn')
  metricsMoneyBtn.innerHTML = `<i class="fa-solid fa-coins"></i>`
  metricsMoneyBtn.addEventListener('click', () => {
    metricsUpdateStreak(streakWrapperValue, 'money', user)
    metricsUpdateChart('.chartFrame', 'money', user)
  })

  const trackingData = await getTrackingData(user)
  console.log('trackingData -> ', trackingData)

  const habitsTrackedByUser = []
  for (let habit in trackingData) {
    if (
      trackingData[habit] &&
      habit.includes('_track') &&
      trackingData[habit] === true
    ) {
      habitsTrackedByUser.push(habit)
    }
  }

  // Append global button and other tracked buttons to the wrapper
  selectionBarWrapper.append(metricsAllBtn)

  if (habitsTrackedByUser.includes('sleep_track'))
    selectionBarWrapper.append(metricsSleepBtn)
  if (habitsTrackedByUser.includes('exercise_track'))
    selectionBarWrapper.append(metricsExerciseBtn)
  if (habitsTrackedByUser.includes('water_track'))
    selectionBarWrapper.append(metricsWaterBtn)
  if (habitsTrackedByUser.includes('smoking_track'))
    selectionBarWrapper.append(metricsSmokingBtn)
  if (habitsTrackedByUser.includes('money_track'))
    selectionBarWrapper.append(metricsMoneyBtn)

  console.log('====================== habitsTrackedByUser', habitsTrackedByUser)

  targetElement.append(selectionBarWrapper)
  targetElement.append(chartWrapper)
  metricsUpdateStreak(streakWrapperValue, 'all', user)
  metricsUpdateChart('.chartFrame', 'all', user)
}

// Fetching Functions

async function metricsUpdateStreak(targetElement, endpoint, username) {
  console.log('user is ', username)
  const url = `http://localhost:3000/entries/streak/${endpoint}/${username}`
  const response = await fetch(url)
  const data = await response.json()

  console.log('data', data)
  targetElement.textContent = data
}

async function metricsUpdateChart(targetElement, endpoint, username) {
  let canvasChart = document.querySelector(targetElement)

  const url = `http://localhost:3000/entries/${endpoint}/${username}`

  // routes not working
  // const response = await fetch(url)
  // const data = await response.json()

  // console.log('data for the chart', data)

  // fetch data
  const response = await fetch(url)
  const data = await response.json()
  console.log('****===*** ', data)
  console.log('===***=== ', url)

  const hardcodedArrayWater = [4, 6, 5, 2, 7, 4, 6]
  const hardcodedArraySmoking = [12, 5, 3, 7, 4, 16, 7]
  const hardcodedArrayExercise = [0, 1, 0, 1, 0, 1, 1]
  const hardcodedArrayMoney = [20, 10, 15, 10, 5, 0, 10]
  const hardcodedArrayGlobal = [1, 1, 2, 3, 3, 2, 3]

  populateChart(data, canvasChart)
}

// Chart related functions and data

function populateChart(chartData, targetElemCtx) {
  const labels = ['Day1', 'Day2', 'Day3', 'Day4', 'Day5', 'Day6', 'Day7']

  const data = {
    labels,
    series: [chartData],
  }

  new Chartist.Bar(targetElemCtx, data)
}

// ******************* end of metrics *************** //
// ******************* start of auth  **************** //

function createMetricsWrapper() {
  // wipe the habits page
  metricspage.innerHTML = ''

  // HARDCODED USER
  const user = 'igormirowski'

  createHabitsSelectionBar(metricspage, user)
  createCalendar(metricspage, user)

  // will pass it the metrics when available as a second argument
}

async function createCalendar(targetElement, user, endpoint = 'all') {
  const url = `http://localhost:3000/entries/calendar/${endpoint}/${user}`
  const response = await fetch(url)
  const data = await response.json()
  console.log('28 days data ', data)

  const daysOfTheWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const { numberOfDays, dayOfLastMonth, dayOfWeekLastMonthNumber } =
    getNumberOfDaysLastMonth()
  // console.log(numberOfDays)
  // console.log(dayOfLastMonth)
  const now = new Date()
  const today = now.getDate()
  const daysToSkip = now.getDay() + 1
  const thisMonth = getMonthString()

  const calendarWrapper = document.createElement('div')
  calendarWrapper.classList.add('calendar-wrapper')

  const calendarMonth = document.createElement('div')
  calendarMonth.classList.add('calendar-month')
  calendarMonth.textContent = thisMonth
  calendarWrapper.append(calendarMonth)

  const calendarDaysWrapper = document.createElement('div')
  calendarDaysWrapper.classList.add('calendar-days-wrapper')
  daysOfTheWeek.forEach((nameOfDay) => {
    const day = document.createElement('div')
    day.classList.add('calendar-day-name', 'calendar-day')
    day.textContent = nameOfDay
    calendarDaysWrapper.append(day)
  })

  let j = dayOfLastMonth
  let colourIndex = 0
  // console.log('dayOfLastMonth ', dayOfLastMonth)
  for (let i = 1; i <= 35; i++) {
    // console.log('j ', j)
    const day = document.createElement('div')
    day.classList.add('calendar-day-number', 'calendar-day')
    if (i > daysToSkip) {
      if (data[colourIndex] === 1) {
        day.style.backgroundColor = '#e56b6f'
        day.style.color = 'white'
        day.style.border = 'none'
      }
      if (data[colourIndex] === 2) {
        day.style.backgroundColor = '#57cc99'
        day.style.color = 'white'
        day.style.border = 'none'
      }
      colourIndex++
    }

    // console.log('aaaaaa ', dayOfWeekLastMonthNumber)
    if (j > numberOfDays) j = 1

    if (i > dayOfWeekLastMonthNumber + 1 && i <= dayOfLastMonth + 28) {
      // console.log('****', 28 + dayOfWeekLastMonthNumber)
      if (j === today) {
        day.style.fontWeight = 'bold'
        day.style.color = 'black'
        day.style.fontSize = '20px'
      }
      day.textContent = j++
    }
    calendarDaysWrapper.append(day)
  }

  calendarWrapper.append(calendarDaysWrapper)
  targetElement.append(calendarWrapper)
}

function getNumberOfDaysLastMonth() {
  const now = new Date()
  const month = now.getMonth()
  // console.log(month)

  const year = now.getFullYear()
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0

  let numberOfDays
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      numberOfDays = 31
      break
    case 4:
    case 6:
    case 9:
    case 11:
      numberOfDays = 30
      break
    case 2:
      if (isLeapYear) {
        numberOfDays = 29
      } else {
        numberOfDays = 28
      }
    default:
      console.log('Something went wrong getting the days of the month...')
  }

  const { dayOfLastMonth, dayOfWeekLastMonthNumber } = getLastMonthDay()

  return {
    numberOfDays,
    dayOfLastMonth,
    dayOfWeekLastMonthNumber,
  }
}

function getLastMonthDay(date = new Date()) {
  const lastMonth = new Date(date.getTime())
  lastMonth.setDate(date.getDate() - 28)
  const dayOfLastMonth = lastMonth.getDate() + 1
  const dayOfWeekLastMonthNumber = lastMonth.getDay()
  return { dayOfLastMonth, dayOfWeekLastMonthNumber }
}

function getMonthString() {
  const now = new Date()
  const month = now.getMonth() + 1

  switch (month) {
    case 1:
      return 'January'
      break
    case 2:
      return 'February'
      break
    case 3:
      return 'March'
      break
    case 4:
      return 'April'
      break
    case 5:
      return 'May'
      break
    case 6:
      return 'June'
      break
    case 7:
      return 'July'
      break
    case 8:
      return 'August'
      break
    case 9:
      return 'September'
      break
    case 10:
      return 'October'
      break
    case 11:
      return 'November'
      break
    case 12:
      return 'December'
      break
    default:
      console.log('Something went wrong getting the month...')
  }
}

// Create the bar at the top of the calendar that allows the user to
// select which habits to show
// async function createHabitsSelectionBar(targetElement, user) {
//   // chartWrapper will have the chart with the habit's data
//   const chartWrapper = document.createElement('div')
//   chartWrapper.classList.add('metricsChartWrapper')

//   const iconsDict = {
//     exerciseSelBtn: 'fa-football',
//     sleepSelBtn: 'fa-bed',
//     moneySelBtn: 'fa-coins',
//     smokingSelBtn: 'fa-smoking',
//     waterSelBtn: 'fa-faucet-drip',
//   }

//   // selectionBarWrapper will have the buttons to select which
//   // habit to show
//   const selectionBarWrapper = document.createElement('div')
//   selectionBarWrapper.classList.add('selectionBarWrapper')

//   const trackingData = await getTrackingData(user)
//   console.log('trackingData -> ', trackingData)

//   for (let habit in trackingData) {
//     if (
//       trackingData[habit] &&
//       habit.includes('_track') &&
//       trackingData[habit] === true
//     ) {
//       console.log('*=*=* ', habit.includes('_track'))

//       const btnClassName = habit.split('_track')[0].concat('SelBtn')
//       const newBtn = document.createElement('div')
//       newBtn.classList.add(btnClassName, 'metricsSelBtn')
//       newBtn.innerHTML = `<i class="fa-solid ${iconsDict[btnClassName]}"></i>`

//       newBtn.addEventListener('click', () => {
//         // 1. fetch data for this specific habit
//         console.log('Will populate the chart here')
//         // 2. populate the chart
//         chartWrapper.innerHTML = ''

//         const chartElement = document.createElement('div')
//         chartElement.classList.add('chartElement')
//         chartWrapper.append(chartElement)

//         console.log('AAA', this)
//       })

//       selectionBarWrapper.append(newBtn)
//       console.log(btnClassName)
//     }
//   }

//   targetElement.append(selectionBarWrapper)
//   targetElement.append(chartWrapper)
// }

async function createHabitsSelectionBar(targetElement, user) {
  // chartWrapper will have the chart with the habit's data
  const chartWrapper = document.createElement('div')
  chartWrapper.classList.add('metricsChartWrapper')

  const streakWrapper = document.createElement('div')
  streakWrapper.classList.add('streakWrapper')
  chartWrapper.append(streakWrapper)

  const streakWrapperTitle = document.createElement('div')
  streakWrapperTitle.classList.add('streakWrapperTitle')
  streakWrapperTitle.textContent = 'Streak'
  streakWrapper.append(streakWrapperTitle)

  const streakWrapperValue = document.createElement('div')
  streakWrapperValue.classList.add('streakWrapperValue')
  streakWrapper.append(streakWrapperValue)

  const chartFrame = document.createElement('div')
  chartFrame.classList.add('chartFrame', 'ct-chart')
  chartWrapper.append(chartFrame)

  // selectionBarWrapper will have the buttons to select which
  // habit to show
  const selectionBarWrapper = document.createElement('div')
  selectionBarWrapper.classList.add('selectionBarWrapper')

  const metricsAllBtn = document.createElement('div')
  metricsAllBtn.classList.add('metricsBtn', 'metricsAllBtn')
  metricsAllBtn.innerHTML = `<i class="fa-solid fa-globe"></i>`
  metricsAllBtn.addEventListener('click', () => {
    metricsUpdateStreak(streakWrapperValue, 'all', user)
    metricsUpdateChart('.chartFrame', 'all', user)
  })

  const metricsSleepBtn = document.createElement('div')
  metricsSleepBtn.classList.add('metricsBtn', 'metricsSleepBtn')
  metricsSleepBtn.innerHTML = `<i class="fa-solid fa-bed"></i>`
  metricsSleepBtn.addEventListener('click', () => {
    metricsUpdateStreak(streakWrapperValue, 'sleep', user)
    metricsUpdateChart('.chartFrame', 'sleep', user)
  })

  const metricsExerciseBtn = document.createElement('div')
  metricsExerciseBtn.classList.add('metricsBtn', 'metricsExerciseBtn')
  metricsExerciseBtn.innerHTML = `<i class="fa-solid fa-football"></i>`
  metricsExerciseBtn.addEventListener('click', () => {
    metricsUpdateStreak(streakWrapperValue, 'exercise', user)
    metricsUpdateChart('.chartFrame', 'exercise', user)
  })

  const metricsWaterBtn = document.createElement('div')
  metricsWaterBtn.classList.add('metricsBtn', 'metricsWaterBtn')
  metricsWaterBtn.innerHTML = `<i class="fa-solid fa-faucet-drip"></i>`
  metricsWaterBtn.addEventListener('click', () => {
    metricsUpdateStreak(streakWrapperValue, 'water', user)
    metricsUpdateChart('.chartFrame', 'water', user)
  })

  const metricsSmokingBtn = document.createElement('div')
  metricsSmokingBtn.classList.add('metricsBtn', 'metricsSmokingBtn')
  metricsSmokingBtn.innerHTML = `<i class="fa-solid fa-smoking"></i>`
  metricsSmokingBtn.addEventListener('click', () => {
    metricsUpdateStreak(streakWrapperValue, 'smoking', user)
    metricsUpdateChart('.chartFrame', 'smoking', user)
  })

  const metricsMoneyBtn = document.createElement('div')
  metricsMoneyBtn.classList.add('metricsBtn', 'metricsMoneyBtn')
  metricsMoneyBtn.innerHTML = `<i class="fa-solid fa-coins"></i>`
  metricsMoneyBtn.addEventListener('click', () => {
    metricsUpdateStreak(streakWrapperValue, 'money', user)
    metricsUpdateChart('.chartFrame', 'money', user)
  })

  const trackingData = await getTrackingData(user)
  console.log('trackingData -> ', trackingData)

  const habitsTrackedByUser = []
  for (let habit in trackingData) {
    if (
      trackingData[habit] &&
      habit.includes('_track') &&
      trackingData[habit] === true
    ) {
      habitsTrackedByUser.push(habit)
    }
  }

  // Append global button and other tracked buttons to the wrapper
  selectionBarWrapper.append(metricsAllBtn)

  if (habitsTrackedByUser.includes('sleep_track'))
    selectionBarWrapper.append(metricsSleepBtn)
  if (habitsTrackedByUser.includes('exercise_track'))
    selectionBarWrapper.append(metricsExerciseBtn)
  if (habitsTrackedByUser.includes('water_track'))
    selectionBarWrapper.append(metricsWaterBtn)
  if (habitsTrackedByUser.includes('smoking_track'))
    selectionBarWrapper.append(metricsSmokingBtn)
  if (habitsTrackedByUser.includes('money_track'))
    selectionBarWrapper.append(metricsMoneyBtn)

  console.log('====================== habitsTrackedByUser', habitsTrackedByUser)

  targetElement.append(selectionBarWrapper)
  targetElement.append(chartWrapper)
  metricsUpdateStreak(streakWrapperValue, 'all', user)
  metricsUpdateChart('.chartFrame', 'all', user)
}

// Fetching Functions

async function metricsUpdateStreak(targetElement, endpoint, username) {
  console.log('user is ', username)
  const url = `http://localhost:3000/entries/streak/${endpoint}/${username}`
  const response = await fetch(url)
  const data = await response.json()

  console.log('data', data)
  targetElement.textContent = data
}

async function metricsUpdateChart(targetElement, endpoint, username) {
  let canvasChart = document.querySelector(targetElement)

  const url = `http://localhost:3000/entries/${endpoint}/${username}`

  // routes not working
  // const response = await fetch(url)
  // const data = await response.json()

  // console.log('data for the chart', data)

  // fetch data
  const response = await fetch(url)
  const data = await response.json()
  console.log('****===*** ', data)
  console.log('===***=== ', url)

  const hardcodedArrayWater = [4, 6, 5, 2, 7, 4, 6]
  const hardcodedArraySmoking = [12, 5, 3, 7, 4, 16, 7]
  const hardcodedArrayExercise = [0, 1, 0, 1, 0, 1, 1]
  const hardcodedArrayMoney = [20, 10, 15, 10, 5, 0, 10]
  const hardcodedArrayGlobal = [1, 1, 2, 3, 3, 2, 3]

  populateChart(data, canvasChart)
}

// Chart related functions and data

function populateChart(chartData, targetElemCtx) {
  const labels = ['Day1', 'Day2', 'Day3', 'Day4', 'Day5', 'Day6', 'Day7']

  const data = {
    labels,
    series: [chartData],
  }

  new Chartist.Bar(targetElemCtx, data)
}

// **************** end of auth ********************** //

module.exports = {
  renderSelectedPage,
  displayPage,
  populatePage,
  createHabitsWrapper,
  openHabitsModal,
  getTrackingData,
  createAndAppendCards,
  toggleBtn,
  adjustCounter,
  createMetricsWrapper,
  createCalendar,
  getNumberOfDaysLastMonth,
  getLastMonthDay,
  getMonthString,
  createHabitsSelectionBar,
  metricsUpdateStreak,
  metricsUpdateChart,
  populateChart,
  createMetricsWrapper,
  createCalendar,
  getNumberOfDaysLastMonth,
  getLastMonthDay,
  getMonthString,
  createHabitsSelectionBar,
  metricsUpdateStreak,
  metricsUpdateChart,
  populateChart,
}

},{}]},{},[1]);
