module.exports = function () {

this.Given('I am on the paraBank Website',function(){
     return helpers.loadPage(page.paraBank.paraBankurl)
});   

this.When(/^I enter userName as "([^"]*)"$/, function(objKey1){
    return page.paraBank.inputUserName(objKey1);
});

this.When(/^I enter password as "([^"]*)"$/, function(objkey1){
    return page.paraBank.inputPassword(objkey1);
});


}