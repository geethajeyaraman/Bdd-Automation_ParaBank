const { assert } = require("chai");
const helpers = require("../runtime/helpers");

/* eslint-disable no-undef */
module.exports = {

   
    elements : {
        username :'//*[@id="loginPanel"]/form/div[1]/input',
        password :'//*[@id="loginPanel"]/form/div[2]/input',
        LoginButton :'//*[@id="loginPanel"]/form/div[3]/input',
        LoginErrorMessage : '//*[@id="rightPanel"]/h1',
        AccountsOverviewHeader : '//*[@id="rightPanel"]/div/div/h1',
        ForgotLoginInfo : '//*[@id="loginPanel"]/p[1]/a',
        CustomerLookup : '//*[@id="rightPanel"]/h1',
        FirstName : '//*[@id="firstName"]' ,
        lastName : '//*[@id="lastName"]',
        Address : '//*[@id="address.street"]',
        City : '//*[@id="address.city"]',
        State : '//*[@id="address.state"]',
        zipcode : '//*[@id="address.zipCode"]',
        SSN : '//*[@id="ssn"]',
        FindMyLoginInfo : '//*[@id="lookupForm"]/table/tbody/tr[8]/td[2]/input',
        ForgotLoginErrorMessage : '//*[@id="rightPanel"]/p',
        Register : '//*[@id="loginPanel"]/p[2]/a',
        ForgotLoginSuccessMessage : '//*[@id="rightPanel"]/p[1]',
        SigningUpisEasyHeader : '//*[@id="rightPanel"]/h1',
        FirstName :'//*[@id="customer.firstName"]',
        LastName : '//*[@id="customer.lastName"]',
        Address : '//*[@id="customer.address.street"]',
        City : '//*[@id="customer.address.city"]',
        State : '//*[@id="customer.address.state"]',
        Zipcode : '//*[@id="customer.address.zipCode"]',
        Phone : '//*[@id="customer.phoneNumber"]',
        SSN  : '//*[@id="customer.ssn"]',
        UserName  : '//*[@id="customer.username"]',
        Password : '//*[@id="customer.password"]',
        confirm : '//*[@id="repeatedPassword"]',
        RegisterButton : '//*[@id="customerForm"]/table/tbody/tr[13]/td[2]/input',
        RegisterSuccessMessage : '//*[@id="rightPanel"]/p',
        
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