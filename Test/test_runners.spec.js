const testCases = require('../Test/test_cases.js');

//This Is Main Runner File / Entry Point
//Before Running, Go to Data Class and change email_id to 1234
describe('Test Suite', function(){
    this.timeout(50000);

    //First Test Scenario
    it('Test Case Fashion, Sign Up Step', async function(){
        var url = "https://commerceos.staging.devpayever.com/registration/fashion";
        await testCases.home_page(url);
    })
    it('Test Case Fashion, Business Info Step', async function(){
        await testCases.bussiness_info();
    })
    it('Test Case Fashion, DashBoard Validation Step', async function(){
        await testCases.fashion_dashboard();
    })

    //Second Test Scenario
    it('Test Case santander, Sign Up Step', async function(){
        var url = "https://commerceos.staging.devpayever.com/registration/santender";
        await testCases.home_page(url);
    })
    it('Test Case santander, Bussiness Info Step', async function(){
        await testCases.bussiness_info();
    })
    it('Test Case santander, DashBoard Validation', async function(){
        await testCases.santander_dashboard();
        await testCases.close_browser();
    })
})
