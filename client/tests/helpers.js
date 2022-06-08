const path = require('path')
const jsdom = require('jsdom');
const { resolve } = require('path');
const { rejects } = require('assert');
const { JSDOM } = jsdom;

const renderDOM = async(filename) => {
    const filePath = path.join(process.cwd(), filename)

    const dom = await JSDOM.fromFile(filePath, {
        runScripts: 'dangerously',
        resources: 'usable'
    })

    return new Promise((resolve, reject) => {
        dom.window.document.addEventListener('DOMContentLoaded', () => {
            resolve(dom)
        })
    })
}

module.exports = renderDOM;