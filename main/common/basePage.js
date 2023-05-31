var webdriver = require('selenium-webdriver');
const {By, until} = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('chrome').build();
driver.manage().setTimeouts({implicit: (10000)});

//Base Actions
class BasePage{

    constructor(){
        global.driver = driver;
    }
    async go_to_url(theURL){
        await driver.get(theURL);
    }

    async find_element(xpath)
    {
        var element = await driver.findElement(By.xpath(xpath))
        return element;
    }

    async find_elements(xpath)
    {
        var elements = await driver.findElements(By.xpath(xpath));
        return elements;
    }

    async get_url()
    {
       return driver.getCurrentUrl();
    }

    async get_driver()
    {
        return driver;
    }

    async close_browser(){
        await driver.quit();
    }

    async element_selector(xpathText, xpathAttribute, content)
    {
        var xpath = "//span[contains(text(), $s)]".replace('$s', xpathText);
        var xpathInput = "//input[@formcontrolname = $s]".replace('$s', xpathAttribute);

        var webElement = await this.find_element(xpath);
        var webElementInput = await this.find_element(xpathInput);
        
        await webElement.click();
        await webElementInput.sendKeys(content);
    }

    async fill_dropdowns(numberOfDropdowns)
    { 
        var i = 0;
        var list_of_perb_slects = await this.find_elements("//peb-select");
        while (i < numberOfDropdowns) {
        await list_of_perb_slects[i].click();

        var list_of_options = await this.find_elements("//peb-select-option");
        await list_of_options[1].click();
        i++;
        }
    }
}

module.exports = BasePage;