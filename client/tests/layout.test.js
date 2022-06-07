/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');
// const { hasUncaughtExceptionCaptureCallback } = require('process');
// const { isTypedArray } = require('util/types');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');


// describe('index.html', () => {
//     beforeEach(() => {
//         require ('../js/app.js')
//         require('../js/utils.js')
//         document.documentElement.innerHTML = html.toString();
//     })

//     test('it has a header title', () => {
//         let header = document.querySelector('header');
//         const title = document.querySelector('title');
//         expect(title).toBeTruthy()
//     })

//     it('body section to contain title', () => {
//         const title = document.querySelector('title');
//         expect(title.textContent),toContain('Document');
//     })

// })

// Testing modal Section
describe('body', () => {
    it('modal has a title', () => {
      let heading = document.getElementsByClassName('modal-title')
      expect(heading).toBeTruthy()
    })
  })
  
//   // Form testing
//   describe('body', () => {
//     it('it has a form', () => {
//       let heading = document.querySelector('#form')
//       expect(heading).toBeTruthy()
//     })
//   })

  // has footer section 
        describe('html', () => {
            test('it has a submit button', () => {
                let postButton = document.getElementsByClassName('postButton');
                expect(postButton).toBeTruthy();
            })

        })

