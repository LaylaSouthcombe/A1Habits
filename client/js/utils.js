// Main Page ////////////////////////////////

function renderSelectedPage(e) {
  e.preventDefault()
  const btnClicked = e.target

  switch (btnClicked) {
    case 'home':
      displayPage('home')
      break
    case 'metrics':
      displayPage('metrics')
      break
    case 'habits':
      displayPage('habits')
      break
  }
}
// every page apart from the homepage should start with a class of 'disabled'
function displayPage(requestedPage) {
  const availablePages = ['home', 'metrics', 'habits']
  availablePages.forEach((page) => {
    if (page === requestedPage) {
      page.classList.remove('disabled')
    } else {
      page.classList.add('disabled')
    }
  })
}

// Habits Page

// Called from within the habits-related modal
function displayHabits(e) {
  e.preventDefault()
  const availableHabits = ['sleep', 'exercise', 'smoking', 'water', 'money']
  const checkboxes = document.querySelectorAll('.habitCheckbox')
  createHabitsCards(checkboxes)
}

function createHabitsCards(habits) {
  elements.forEach((habit) => {
    createAndAddCard(habit)
  })
}

function createAndAddCard(habit) {
  console.log('creatng habit here')
}
