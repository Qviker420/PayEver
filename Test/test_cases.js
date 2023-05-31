const DataClass = require('../main/common/data.js');
const homePage = require('../main/common/homePage.js');
const bussinesInfo = require('../main/pages/businessInfoPage.js');
const DashBoard = require('../main/pages/DashBoardPage.js');
const BasePage = require('../main/common/basePage.js');

//This is Test Cases Class which combines all testing Steps
class TestCases extends BasePage{

    async home_page(url){
        await homePage.enter_url(url);
        await homePage.fill_first_name(DataClass.get_name());
        await homePage.fill_last_name(DataClass.get_last_name());
        await homePage.fill_email(DataClass.get_email(1231));
        await homePage.fill_password(DataClass.get_password());
        await homePage.confirm_password(DataClass.get_password());
        await homePage.sign_up();
    }

    async bussiness_info()
    {
        await bussinesInfo.fill_dropdowns();
        await bussinesInfo.fill_name(DataClass.get_name());
        await bussinesInfo.fill_number(DataClass.get_number());
        await bussinesInfo.get_started();
    }

    async fashion_dashboard()
    {
        await DashBoard.get_started();
        await DashBoard.validate_icon('Transactions');
        await DashBoard.validate_icon('Checkout');
        await DashBoard.validate_icon('Connect');
        await DashBoard.validate_icon('Products');
        await DashBoard.validate_icon('Shop');
        await DashBoard.validate_icon('Message');
        await DashBoard.validate_icon('Settings');
    }

    async santander_dashboard()
    {
        await DashBoard.get_started();
        await DashBoard.validate_icon('Transactions');
        await DashBoard.validate_icon('Checkout');
        await DashBoard.validate_icon('Connect');
        await DashBoard.validate_icon('Products');
        await DashBoard.validate_icon('Shop');
        await DashBoard.validate_icon('Point of Sale');
        await DashBoard.validate_icon('Settings');
    }

    async quit()
    {
        this.close_browser();
    }
}

module.exports = new TestCases();