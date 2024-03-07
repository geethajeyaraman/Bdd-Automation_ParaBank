const { assert } = require("chai");
const helpers = require("../runtime/helpers");

/* eslint-disable no-undef */
module.exports = {

    paraBankurl: 'https://parabank.parasoft.com/parabank/index.htm',
    elements : {
        userName :'//*[@id="loginPanel"]/form/div[1]/input',
        password :'//*[@id="loginPanel"]/form/div[2]/input'
    },


   inputuserName: async function (Name) {
    console.log("inputuserName :"+Name);
    var selector = this.elements['userName'];
    console.log("inputUserName Selector :"+selector);
        await driver.sleep(2000);
    return driver.findElement(By.xpath(selector)).sendKeys(Name);

},

    inputPassword: async function (pwd) {
    console.log("inputPassword :"+pwd);
    var selector = this.elements['password'];
    console.log("inputPassword Selector :"+selector);
        await driver.sleep(2000);
    return driver.findElement(By.xpath(selector)).sendKeys(pwd);

}
   

};