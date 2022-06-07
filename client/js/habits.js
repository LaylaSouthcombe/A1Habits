function createHabitsWrapper() {
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
  habitsManageBtn.addEventListener('click', openHabitsModal())
  topContainer.append(habitsManageBtn)

  //
  // create the container for the list of tacked habits
  const habitsTrackedList = document.createElement('div')
  habitsTrackedList.classList.add('habitsTrackedList')
  habitsTrackedList.textContent = ''
  frame.append(habitsTrackedList)

  // fetch Data

  // currently not working serverside, using hardcoded data
  // const userOneData = getTrackingData()
  // console.log('Tracking - userOneData -> ', userOneData)
  const hardcodedData = {
    user_id: 1,
    sleep: true,
    sleep_goal: 8,
    exercise: true,
    exercise_goal: 4,
    exercise_freq: 'week',
    water: true,
    water_goal: 6,
    smoking: true,
    smoking_goal: 8,
    money: true,
    money_goal: 4,
    money_begin_date: '2022-06-06',
    money_end_date: '2022-07-06',
  }
  console.log('Hardcoded data -> ', hardcodedData)

  // create the habits cards
  createAndAppendCards(hardcodedData, habitsTrackedList)

  // FETCH the data from '/trackings' (atm get the first element of the array)

  // append the frame to the habits section (id=habits, habitspage)
  habitspage.append(frame)
}

// call the modal for managing the Habits
function openHabitsModal() {
  console.log('Inside openHabitsModal!')
}

// fetch the data for the habits
async function getTrackingData() {
  const url = `http://localhost:3000/trackings`

  const response = await fetch(url)
  const data = response.json()
  // during testing, get the first user's data
  const dataFirstUser = data[0]

  return dataFirstUser
}

// create and append the cards to the Habits List element
function createAndAppendCards(data, targetElem) {
  if (data.sleep) {
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
    sleepCardBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    sleepCardBtn.addEventListener('click', toggleBtn)
    sleepCard.append(sleepCardBtn)

    targetElem.append(sleepCard)
  }

  if (data.exercise) {
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
    exerciseCardBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    exerciseCardBtn.addEventListener('click', toggleBtn)
    exerciseCard.append(exerciseCardBtn)

    targetElem.append(exerciseCard)
  }

  if (data.water) {
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
    waterBtnContainer.append(waterMinusBtn)

    const waterCurrentBtn = document.createElement('div')
    waterCurrentBtn.classList.add('habitsCurrentBtn')
    // serverside: need the current water intake, need a JOIN with another table
    waterCurrentBtn.textContent = data.water_current || 0
    waterBtnContainer.append(waterCurrentBtn)

    const waterPlusBtn = document.createElement('div')
    waterPlusBtn.classList.add('habitsPlusBtn')
    waterPlusBtn.textContent = '+'
    waterBtnContainer.append(waterPlusBtn)

    waterCard.append(waterBtnContainer)
    targetElem.append(waterCard)
  }

  if (data.smoking) {
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
    smokingBtnContainer.append(smokingMinusBtn)

    const smokingCurrentBtn = document.createElement('div')
    smokingCurrentBtn.classList.add('habitsCurrentBtn')
    // serverside: need the current water intake, need a JOIN with another table
    smokingCurrentBtn.textContent = data.smoking_current || 0
    smokingBtnContainer.append(smokingCurrentBtn)

    const smokingPlusBtn = document.createElement('div')
    smokingPlusBtn.classList.add('habitsPlusBtn')
    smokingPlusBtn.textContent = '+'
    smokingBtnContainer.append(smokingPlusBtn)

    smokingCard.append(smokingBtnContainer)
    targetElem.append(smokingCard)
  }

  if (data.money) {
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
    moneyMinusBtn.textContent = '-'
    moneyBtnContainer.append(moneyMinusBtn)

    const moneyCurrentBtn = document.createElement('div')
    moneyCurrentBtn.classList.add('habitsCurrentBtn')
    // serverside: need the current water intake, need a JOIN with another table
    moneyCurrentBtn.textContent = data.money_current || 0
    moneyBtnContainer.append(moneyCurrentBtn)

    const moneyPlusBtn = document.createElement('div')
    moneyPlusBtn.classList.add('habitsPlusBtn')
    moneyPlusBtn.textContent = '+'
    moneyBtnContainer.append(moneyPlusBtn)

    moneyCard.append(moneyBtnContainer)
    targetElem.append(moneyCard)
  }
}

// Utility functions ///////////////////

function toggleBtn(btnRef) {
  console.log('btnRef -> ', btnRef)
  if (this.innerHTML.match(/xmark/i)) {
    this.innerHTML = '<i class="fa-solid fa-check"></i>'
    // send update to the server

    // createHabitsWrapper()
  } else {
    this.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    // send update to the server

    // createHabitsWrapper()
  }
}
