module.exports = function () {

this.Given('I am on the ParaBank Website',function(){
     return helpers.loadPage(page.paraBank.paraBankurl)
});   

this.When(/^I enter UserName as "([^"]*)"$/, function(objKey1){
    return page.paraBank.inputuserName(objKey1);
});

this.When(/^I enter Password as "([^"]*)"$/, function(objkey1){
    return page.paraBank.inputpassword(objkey1);
});


}