Feature: As a ParaBank customer, I want to be able to Login My Page so that access my Account

@ParaBank @paraBankLoginValidation
Scenario Outline: Customer Login Page Validation with Multiple user information
Given I am on the paraBank Website
When I enter "loginUserName" as  "<uname>"
And I enter "loginPassword" as  "<pwd>"
And I click on "loginButton"
Then I should see "loginErrorMessage"
Examples:
| uname | pwd |
| test | test123 |
| john | john123 |
| peter | peter123 |



@ParaBank @paraBankSuccessLogin
Scenario: Customer Login Page Validation with Successful user information
Given I am on the paraBank Website
When I enter "loginUserName" as  "geetha"
And I enter "loginPassword" as  "geetha123"
And I click on "loginButton"
Then I should see "AccountsOverviewHeader"


@ParaBank @paraBankLoginMultipleInputs
Scenario: Customer Login Page Validation with Multipe Inputs
Given I am on the paraBank Website
When I enter the inputs for login
| inputField    | inputValue |
| loginUserName | test |
| loginPassword | test123 |
And I click on "loginButton"
Then I should see "loginErrorMessage"

@ParaBank @paraBankForgotLoginInfoFailed
Scenario: Customer Forgot Login Page with InValidation Inputs
Given I am on the paraBank Website
When I click on "forgotLoginInfo"
And I should see "customerLookup"
And I enter the inputs for reset
| inputField            | inputValue    |
| forgotLoginFirstName  | Joe           |
| forgotLoginLastName   | Peter         |
| forgotLoginAddress    | 1234 south st |
| forgotLoginCity       | Tampa         |
| forgotLoginState      | Fl            |
| forgotLoginZipCode    | 33759         |
| forgotLoginSSN        | 23434ybksfksd |
And I click on "findMyLoginInfo"
Then I should see "forgotLoginErrorMessage"

@ParaBank @paraBankForgotLoginInfoSuccess
Scenario: Customer successfully created the Account
Given I am on the paraBank Website
When I click on "forgotLoginInfo"
And I should see "customerLookup"
And I enter the inputs for reset
| inputField                 | inputValue    |
| forgotLoginFirstName       | Geetha        |
| forgotLoginLastName        | karthik       |
| forgotLoginAddress  | 123 East st   |
| forgotLoginCity        | Tampa         |
| forgotLoginState      | Fl            |
| forgotLoginZipCode         | 33759         |
| forgotLoginSSN             | hyryudtyd     |
And I click on "findMyLoginInfo"
Then I should see "forgotLoginSuccessMessage"



@ParaBank @paraBankRegisterSuccess
Scenario: Customer Register page with Successful Inputs
Given I am on the paraBank Website
When I click on "register"
And I should see "SigningUpisEasyHeader"
And I enter the inputs for register
| inputField  | inputValue   |
| registerFirstName    | Geetha       |
| registerLastName    | Karthik       |
| registerAddress     | 1234 main st  |
| registerCity        | Tampa         |
| registerState       |  fl          |
| registerzipCode    | 33579        |
| registerPhone     | 1234567890    |
| registerSSN         | 234324        |
| registerUserName    | Geetha        |
| registerpassword    | july1992      |
| registerConfirm     | july1992      |
And I click on "registerButton"
Then I should see "registerSuccessMessage"

@ParaBank @paraBankRegisterFailed
Scenario: Customer Register page with Invalid Inputs
Given I am on the paraBank Website
When I click on "register" 
And I should see "SigningUpisEasyHeader"
And I enter the inputs for register
| registerInputField  | inputValue   |
| registerFirstName    | john       |
| registerLastName    | peter       |
| registerAddress     | 1234 north st  |
| registerCity        | Newark         |
| registerState       |  fl          |
| registerzipCode    | 33179        |
| registerPhone#      | 12345670    |
| registerSSN         | 234324        |
| registerUserName    | joe        |
| registerPassword    | jun1992      |
| registerConfirm     | jun1992      |
And I click on "registerButton"
Then I should see "registerErrormessage"




