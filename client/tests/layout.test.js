/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');
const { hasUncaughtExceptionCaptureCallback } = require('process');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');


describe('index.html', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    })

    test('it has a header title', () => {
        let header = document.querySelector('header');
        const title = document.querySelector('title');
        expect(title).toBeTruthy()
    })

})