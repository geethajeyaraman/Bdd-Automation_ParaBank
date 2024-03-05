const { assert } = require("chai");
const helpers = require("../runtime/helpers");

/* eslint-disable no-undef */
module.exports = {

    paraBankurl: 'https://parabank.parasoft.com/parabank/index.htm',
    elements : {
        UserName :'//*[@id="loginPanel"]/form/div[1]/input',
        Password :'//*[@id="loginPanel"]/form/div[2]/input'
    },


   inputuserName: async function (Name) {
    console.log("InputuserName :"+Name);
    var selector = this.elements['UserName'];
    console.log("Input UserName Selector :"+selector);
        await driver.sleep(2000);
    return driver.findElement(By.xpath(selector)).sendKeys(Name);

},

    inputpassword: async function (pwd) {
    console.log("InputPassword :"+pwd);
    var selector = this.elements['Password'];
    console.log("Input Password Selector :"+selector);
        await driver.sleep(2000);
    return driver.findElement(By.xpath(selector)).sendKeys(pwd);

}
   

};