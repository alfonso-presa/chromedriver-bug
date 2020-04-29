require("chromedriver");
const hs = require("http-server");
const path = require("path");
const {Builder, By } = require('selenium-webdriver');

const server = hs.createServer({
    root: path.join(__dirname, '..', 'static')
});
server.listen(9090);

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
      await require('./tests')(driver);
    } catch(e) {
      console.error(e);
    } finally {
      await driver.quit();
      server.close();
    }
  })();
