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

  this.When("I enter the inputs for login", function(dataTable){
         
    

    const rows = dataTable.rows();
    for (var i=0;i < rows.length ; i++){
        var inputField = rows[i][0];
        var inputValue = rows[i][1];
        page.common.inputElements(inputField,inputValue);

        if(i == rows.length){
            return page.common.inputElements(inputField,inputValue);
        }
    }
});
this.When("I enter the inputs for reset", function(dataTable){
         
    

    const rows = dataTable.rows();
    for (var i=0;i < rows.length ; i++){
        var inputField = rows[i][0];
        var inputValue = rows[i][1];
        page.common.inputElements(inputField,inputValue);

        if(i == rows.length){
            return page.common.inputElements(inputField,inputValue);
        }
    }
});

this.When("I enter the inputs for register", function(dataTable){
         
    

    const rows = dataTable.rows();
    
    for (var i=0;i < rows.length ; i++){
        var inputField = rows[i][0];
        var inputValue = rows[i][1];
        page.common.inputElements(inputField,inputValue);

        if(i == rows.length){
            return page.common.inputElements(inputField,inputValue);
        }
    }
});

}





