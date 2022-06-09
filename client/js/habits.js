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

  const userData = await getTrackingData()
  // console.log('Tracking - userOneData -> ', userOneData)

  // create the habits cards
  createAndAppendCards(userData, habitsTrackedList)

  // append the frame to the habits section (id=habits, habitspage)

  habits.append(frame)
}

// call the modal for managing the Habits
async function openHabitsModal() {
  const url = `http://localhost:3000/trackings`

  // console.log('Inside openHabitsModal!')
  const habitsModal = document.querySelector('.habits-modal')
  if (habitsModal.classList.contains('disabled')) {
    habitsModal.classList.remove('disabled')
  }

  const habitsModalSubmitBtn = document.querySelector('#habits-submit-button')
  habitsModalSubmitBtn.addEventListener('click', async () => {
    console.log('modal should be disabled ', habitsModal)
    console.log('modal button ', habitsModalSubmitBtn)
    console.log('use fetch to send PUT request to the DB to save the data')

    const habitsData = {
      sleep_track: document.querySelector('#checkbox-sleep').checked,
      sleep_goal: document.querySelector('#habits-form-sleep-hours').value || 0,
      exercise_track: document.querySelector('#checkbox-exercise').checked,
      exercise_goal:
        document.querySelector('#habits-form-exercise-times').value || 0,
      water_track: document.querySelector('#checkbox-water').checked,
      water_goal:
        document.querySelector('#habits-form-water-glasses').value || 0,
      smoking_track: document.querySelector('#checkbox-smoking').checked,
      smoking_goal:
        document.querySelector('#habits-form-smoking-cigarettes').value || 0,
      money_track: document.querySelector('#checkbox-savings').checked,
      money_goal: document.querySelector('#habits-form-money-daily').value || 0,
    }

    console.log(habitsData)
    // PUT REQUEST then UPDATE PAGE calling createHabitsWrapper()

    try {
      const token = retrieveToken()
      console.log('token: ', token)

      const response = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify(habitsData),
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      })
      console.log('response ', response)

      const data = await response.json()

      // const url2 = `http://localhost:3000/trackings/current`
      // const response2 = await fetch(url2, {
      //   headers: {
      //     Authorization: token,
      //   },
      // })

      // const data2 = await response2.json()

      console.log(
        'habits.js - response from sending the tracked data: possibly missing :username from the url of the route as using req.params serverside, however if implementing auth might not be needed anymore - data2 ->',
        data
      )
    } catch (err) {
      console.log('habits.js - openHabitsModal Error -> ', err)
    }
    // dismiss modal
    habitsModal.classList.add('disabled')
  })
}

// fetch the data for the habits
async function getTrackingData() {
  const url = `http://localhost:3000/trackings/current/`
  const token = retrieveToken()
  try {
    const response = await fetch(url, {
      headers: {
        'Content-type': 'application/json',
        Authorization: token,
      },
    })
    console.log('response ====== ', response)
    const data = await response.json()
    console.log('data ======= ', data)

    const dataFirstUser = data
    console.log('habits.js - getTrackingData - ************** ', dataFirstUser)
    return dataFirstUser
  } catch (err) {
    console.log('habits.js - getTrackingData Error: ', err)
  }
}
