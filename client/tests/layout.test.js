/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');
const { title } = require('process');
// const { hasUncaughtExceptionCaptureCallback } = require('process');
// const { isTypedArray } = require('util/types');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');


describe('index.html', () => {
    beforeEach(() => {
        require('../js/utils.js')
        document.documentElement.innerHTML = html.toString();
    })

    test('it has a head title', () => {
        let header = document.querySelector('header');
        const title = document.querySelector('title');
        expect(title).toBeTruthy()
    })

    test('it is linked to script', () => {
        let script = document.querySelector('script');
        const title = document.querySelector('title');
        expect(script).toBeTruthy()
    })

    describe('head', () => {
        test('it has a title', () => {
          const title = document.querySelector('title')
          expect(title.textContent).toContain('Atomic Addicts')
        })
    })


})



// Testing modal Section Starts
describe('body', () => {
    it('modal has a title', () => {
      let heading = document.getElementsByClassName('modal-title')
      expect(heading).toBeTruthy()
    })

    it('Login page is present', () => {
        const login = document.querySelector('.modal-login')
        expect(login.textContent).toContain('Login')
      })


      it('email login box', () => {
        const emailBox = document.querySelector('.form-email-label')
        expect(emailBox.textContent).toContain('email')
      })

      it('email login box', () => {
        const emailBox = document.querySelector('.form-password-label')
        expect(emailBox.textContent).toContain('password')
      })

      it('it has a Register button on login page', () => {
        let postButton = document.getElementsByClassName('#form-reg-btn');
        expect(postButton).toBeTruthy();
      })
// Testing Modal Section Ends


    //   it('it has a Login button on homescreen', () => {
    //     let loginButton = document.querySelector('#form-log-btn');
    //     expect(loginButton.value).toContain('Login?')
    //   })





      it('Signup button is present', () => {
        let submit = document.querySelector('#form-button-signup')
        // let submit = document.getElementById('form-button-signup')
        expect(submit.value).toContain('Signup')
      })


  })
  


  // has footer section 
        describe('html', () => {
            test('it has a submit button', () => {
                let postButton = document.getElementsByClassName('postButton');
                expect(postButton).toBeTruthy();
            })

        })

