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
  habitsTrackedList.textContent = 'Habits in here'
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
    sleepCard.classList.add('habitsSleepCard')

    const sleepCardTitle = document.createElement('div')
    sleepCardTitle.classList.add('habitsSleepCardTitle')
    sleepCardTitle.textContent = 'Sleep'
    sleepCard.append(sleepCardTitle)

    const sleepCardTarget = document.createElement('div')
    sleepCardTarget.classList.add('habitsSleepCardTarget')
    sleepCardTarget.textContent = data.sleep_goal
    sleepCard.append(sleepCardTarget)

    const sleepCardBtn = document.createElement('div')
    sleepCardBtn.classList.add('habitsSleepCardBtn')
    sleepCardBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    sleepCardBtn.addEventListener('click', toggleBtn)
    sleepCard.append(sleepCardBtn)

    targetElem.append(sleepCard)
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
