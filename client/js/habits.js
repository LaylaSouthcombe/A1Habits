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
  // console.log('Inside openHabitsModal!')
  const habitsModal = document.querySelector('.habits-modal')
  if (habitsModal.classList.contains('disabled')) {
    habitsModal.classList.remove('disabled')
  }

  const habitsModalSubmitBtn = document.querySelector('#habits-submit-button')
  habitsModalSubmitBtn.addEventListener('click', () => {
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
