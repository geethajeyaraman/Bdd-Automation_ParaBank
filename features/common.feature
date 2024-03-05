Feature: As a ParaBank customer, I want to be able to Login My Page so that access my Account

@ParaBank @ParaBankLoginValidation
Scenario Outline: Customer Login Page Validation with Multiple user information
Given I am on the ParaBank Website
When I enter "username" as  "<uname>"
And I enter "password" as  "<pwd>"
And I click on "LoginButton"
Then I should see "LoginErrorMessage"
Examples:
| uname | pwd |
| test | test123 |
| john | john123 |
| peter | peter123 |



@ParaBank @ParaBankSuccessLogin
Scenario: Customer Login Page Validation with Successful user information
Given I am on the ParaBank Website
When I enter "username" as  "geetha"
And I enter "password" as  "geetha123"
And I click on "LoginButton"
Then I should see "AccountsOverviewHeader"


@ParaBank @ParaBankLoginMultipleInputs
Scenario: Customer Login Page Validation with Multipe Inputs
Given I am on the ParaBank Website
When I enter the inputs for "Login"
| inputField | inputValue |
| username | test |
| password | test123 |
And I click on "LoginButton"
Then I should see "LoginErrorMessage"

@ParaBank @ParaBankForgotLoginInfoFailed
Scenario: Customer Forgot Login Page with InValidation Inputs
Given I am on the ParaBank Website
When I click on "ForgotLoginInfo"
And I should see "CustomerLookup"
And I enter the inputs for Reset
| inputField | inputValue    |
| FirstName  | Joe           |
| lastName   | Peter         |
| Address    | 1234 south st |
| City       | Tampa         |
| State      | Fl            |
| zipcode    | 33759         |
| SSN        | 23434ybksfksd |
And I click on "FindMyLoginInfo"
Then I should see "ForgotLoginErrorMessage"

@ParaBank @ParaBankForgotLoginInfoSuccess
Scenario: Customer successfully created the Account
Given I am on the ParaBank Website
When I click on "ForgotLoginInfo"
And I should see "CustomerLookup"
And I enter the inputs for Reset
| inputField | inputValue    |
| FirstName  | Geetha           |
| lastName   | karthik         |
| Address    | 123 East st |
| City       | Tampa         |
| State      | Fl            |
| zipcode    | 33759         |
| SSN        | hyryudtyd  |
And I click on "FindMyLoginInfo"
Then I should see "ForgotLoginSuccessMessage"



@ParaBank @ParaBankRegisterSuccess
Scenario: Customer Register page with Successful Inputs
Given I am on the ParaBank Website
When I click on "Register"
And I should see "SigningUpisEasyHeader"
And I enter the inputs for Registerbutton
| inputField  | inputValue   |
| FirstName    | Geetha       |
| LastName    | Karthik       |
| Address     | 1234 main st  |
| City        | Tampa         |
| State       |  fl          |
| Zipcode    | 33579        |
| Phone     | 1234567890    |
| SSN         | 234324        |
| UserName    | Geetha        |
| Password    | july1992      |
| confirm     | july1992      |
And I click on "RegisterButton"
Then I should see "RegisterSuccessMessage"

@ParaBank @ParaBankRegisterFailed
Scenario: Customer Register page with Invalid Inputs
Given I am on the ParaBank Website
When I click on "Register" 
And I should see "SigningUpisEasyHeader"
And I enter the inputs for Register
| inputField  | inputValue   |
| FirstName    | john       |
| LastName    | peter       |
| Address     | 1234 north st  |
| City        | Newark         |
| State       |  fl          |
| Zip code    | 33179        |
| Phone#      | 12345670    |
| SSN         | 234324        |
| UserName    | joe        |
| Password    | jun1992      |
| confirm     | jun1992      |
And I click on "RegisterButton"
Then I should see "RegisterErrormessage"




