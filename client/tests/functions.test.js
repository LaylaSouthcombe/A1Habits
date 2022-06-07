const path = require('path')
const jsdom = require('jsdom')
const { JSDOM } = jsdom;

// const renderDOM = async (index.html) => {
//     const filePath = path.join(process.cwd(), index.html)

//     const dom = await JSDOM.fromFile(filePath, {
//         runScripts: 'dangerously',
//         resources: 'usable'
//     })


// }

describe('index.html', () => {
    beforeEach(() => {
        require ('../js/app.js')
        require('../js/utils.js')
        document.documentElement.innerHTML = html.toString();
    })


    // describe('head', () => {
    //     test('it has a title', () => {
    //       const title = document.querySelector('title')
    //       expect(title.textContent).toContain('Atomic Addicts')
    //     })

    //   })


})