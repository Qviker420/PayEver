const {Key, By} = require('selenium-webdriver');
var BasePage = require ('../common/basePage.js');
var expect = require('chai').should();

//This is main DashBoard Page Class
class DashBoard extends BasePage {
    async get_started()
    {
        var get_started_button = await this.find_element("//button[@class='welcome-screen-content-button']");
        get_started_button.click();
    }

    async validate_icon(icons__title) {
        var xpath = "//div[@class = 'icons__title' and text() = '$s']".replace('$s', icons__title);
        var checkout = (await this.find_element(xpath)).getText();
        checkout.then((text) => {
            text.should.equal(icons__title);

            if(text != icons__title)
            {
                console.log(icons__title+"Not found");
            }
          });
    }
}

module.exports = new DashBoard();