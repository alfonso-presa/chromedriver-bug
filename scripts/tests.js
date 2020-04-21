const { By } = require('selenium-webdriver');

module.exports = async function (driver) {

    await driver.get('http://localhost:9090');

    console.log("Searching for element");
    //This line searches an element in depth inside the frames and returns it
    await driver.findElement(By.js(() => window.frames[0].frames[0].document.querySelector('h1')));

    console.log("Switch frame");
    //Now we switch to the frame containing the element
    await driver.switchTo().frame(await driver.findElement(By.css('iframe')));
    await driver.switchTo().frame(await driver.findElement(By.css('iframe')));

    console.log("This one works");
    await (await driver.findElement(By.css('h2'))).isDisplayed();
    console.log("This one fails");
    //If the element was returned in the script above it is somehow cached and stale element is thrown.
    await (await driver.findElement(By.css('h1'))).isDisplayed();

}