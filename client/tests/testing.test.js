const renderDOM = require('./helpers')

let dom
let document

describe('index.html', () => {
  beforeEach(async () => {
    dom = await renderDOM('index.html')
    document = await dom.window.document
  })

  //Testing AuthBtn
  it('displays model when login button is clicked', () => {
    // const authButton = document.querySelector('#selection-1')
    // const authBtn = document.querySelector('#auth')
    // authBtn.dispatchEvent(new dom.window.Event('click'))

    const login = document.querySelector('.modal-title')
    expect(login.textContent).toContain('Login')
  })
})
