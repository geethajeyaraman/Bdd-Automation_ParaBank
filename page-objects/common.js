const { assert } = require("chai");
const helpers = require("../runtime/helpers");

/* eslint-disable no-undef */
module.exports = {

   
    elements : {
        loginUserName :'//*[@id="loginPanel"]/form/div[1]/input',
        loginPassword :'//*[@id="loginPanel"]/form/div[2]/input',
        loginButton :'//*[@id="loginPanel"]/form/div[3]/input',
        loginErrorMessage : '//*[@id="rightPanel"]/h1',
        AccountsOverviewHeader : '//*[@id="rightPanel"]/div/div/h1',
        forgotLoginInfo : '//*[@id="loginPanel"]/p[1]/a',
        customerLookup : '//*[@id="rightPanel"]/h1',
        forgotLoginFirstName : '//*[@id="firstName"]' ,
        forgotLoginLastName : '//*[@id="lastName"]',
        forgotLoginAddress : '//*[@id="address.street"]',
        forgotLoginCity : '//*[@id="address.city"]',
        forgotLoginState : '//*[@id="address.state"]',
        forgotLoginZipCode : '//*[@id="address.zipCode"]',
        forgotLoginSSN : '//*[@id="ssn"]',
        findMyLoginInfo : '//*[@id="lookupForm"]/table/tbody/tr[8]/td[2]/input',
        forgotLoginErrorMessage : '//*[@id="rightPanel"]/p',
        register : '//*[@id="loginPanel"]/p[2]/a',
        forgotLoginSuccessMessage : '//*[@id="rightPanel"]/p[1]',
        SigningUpisEasyHeader : '//*[@id="rightPanel"]/h1',
        registerFirstName :'//*[@id="customer.firstName"]',
        registerLastName : '//*[@id="customer.lastName"]',
        registerAddress : '//*[@id="customer.address.street"]',
        registerCity : '//*[@id="customer.address.city"]',
        registerState : '//*[@id="customer.address.state"]',
        registerzipCode : '//*[@id="customer.address.zipCode"]',
        registerPhone : '//*[@id="customer.phoneNumber"]',
        registerSSN  : '//*[@id="customer.ssn"]',
        registerUserName  : '//*[@id="customer.username"]',
        registerpassword : '//*[@id="customer.password"]',
        registerConfirm : '//*[@id="repeatedPassword"]',
        registerButton : '//*[@id="customerForm"]/table/tbody/tr[13]/td[2]/input',
        registerSuccessMessage : '//*[@id="rightPanel"]/p',
        
    },
    inputElements : async function (inputField, inputValue){
        
        var selector = this.elements[inputField];
        await driver.sleep(2000);        
        return driver.findElement(By.xpath(selector)).sendKeys(inputValue);

    },

    clickElement : async function (inputField){
        
        var selector = this.elements[inputField];
        await driver.sleep(2000);
        return driver.findElement(By.xpath(selector)).click();

    },

    elementExists : async function(inputField){
        var selector =this.elements[inputField];
        await driver.sleep(500);
        return driver.findElement(By.xpath(selector)); // true // false
    },
    
};