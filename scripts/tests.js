const { By } = require('selenium-webdriver');

module.exports = async function (driver) {

    async function testFrame(frame) {
        await driver.switchTo().frame(frame);
        await new Promise(res => setTimeout(res, 1000));
        const button = await driver.findElement(By.css('button'));
        await button.click();
        console.log("Element clicked without failure");
        await driver.switchTo().parentFrame();
    }


    await driver.get('http://localhost:9090');
    const lightFrame = await driver.findElement(By.js(() => document.querySelector('#light iframe')));
    const shadowFrame = await driver.findElement(By.js(() => document.querySelector('#shadow').shadowRoot.querySelector('iframe')));
    console.log("this one works");
    await testFrame(lightFrame);
    console.log("this one raises a 'no element reference returned by script'")
    await testFrame(shadowFrame);
}