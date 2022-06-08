const path = require('path')
const jsdom = require('jsdom')
const { JSDOM } = jsdom;

const renderDOM = async (index.html) => {
    const filePath = path.join(process.cwd(), index.html)

    const dom = await JSDOM.fromFile(filePath, {
        runScripts: 'dangerously',
        resources: 'usable'
    })
}
