const { populatePage } = require('../bundle')
const renderDOM = require('./helpers')

let dom
let document

describe('index.html', () => {
  beforeAll(async () => {
    require('../bundle')
  })

  beforeEach(async () => {
    dom = await renderDOM('index.html')
    document = await dom.window.document
  })

  //Testing AuthBtn
  it('habit section appears upon clicking habit icon', () => {
    // const authButton = document.querySelector('#selection-1')
    // const authBtn = document.querySelector('#auth')
    const selectThree = document.querySelector('.fa-smoking')
    selectThree.dispatchEvent(new dom.window.Event('click'))

    const habitsManageBtnAnchor = document.querySelector('.section1')
    expect(habitsManageBtnAnchor).toBeTruthy()
  })

  it.only('tests populatePage(habits) opens the habits page', async () => {
    let habits = document.querySelector('.habitsTopContainer')
    console.log('before ***** habitsTopContainer', habitsTopContainer)

    await populatePage('habits')

    habits = document.querySelector('.habitsTopContainer')
    console.log('after ***** habitsTopContainer', habitsTopContainer)
  })
})
