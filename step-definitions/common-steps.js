module.exports = function (){

   

   this.When(/^I enter "([^"]*)" as  "([^"]*)"$/, function(inputField,inputValue){
            return page.common.inputElements(inputField,inputValue);

    });
    
    this.When(/^I click on "([^"]*)"$/, function(inputField){
          return page.common.clickElement(inputField);
    });

    this.When(/^I should see "([^"]*)"$/, function(inputField){
        return page.common.elementExists(inputField);
  });

  this.When("I enter the inputs for Login", function(dataTable){
         
    

    const rows = dataTable.rows();
    for (var i=0;i < rows.length ; i++){
        var inputField = rows[i][0];
        var inputValue = rows[i][1];
        return page.common.inputElements(inputField,inputValue);
    }
});
this.When("I enter the inputs for Reset", function(dataTable){
         
    

    const rows = dataTable.rows();
    for (var i=0;i < rows.length ; i++){
        var inputField = rows[i][0];
        var inputValue = rows[i][1];
        return page.common.inputElements(inputField,inputValue);
    }
});

this.When("I enter the inputs for Registerbutton", function(dataTable){
         
    

    const rows = dataTable.rows();
    for (var i=0;i < rows.length ; i++){
        var inputField = rows[i][0];
        var inputValue = rows[i][1];
        return page.common.inputElements(inputField,inputValue);
    }
});

}





