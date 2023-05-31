const {Key, By} = require('selenium-webdriver');
var BasePage = require ('../common/basePage.js');

class HomePage extends BasePage{   

    async enter_url(URL){
        await this.go_to_url(URL);
    }

    async fill_first_name(content)
    {
        await this.element_selector("'First name'", "'firstName'", content);
    }
    async fill_last_name(content)
    {
        await this.element_selector("'Last name'", "'lastName'", content);
    }
    async fill_email(content){
        await this.element_selector("'Email'", "'email'", content);
    }
    async fill_password(content){
        await this.element_selector("'Password'", "'password'", content);
    }
    async confirm_password(content){
        await this.element_selector("'Confirm Password'", "'confirmPass'", content);
    }
    async sign_up(){
        const buttonElement = this.find_element("//button[@class='signup-button']");
        (await buttonElement).click();
    }

}

module.exports = new HomePage();