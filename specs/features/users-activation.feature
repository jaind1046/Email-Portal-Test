Feature: User Activation

Background: Login
		Given I am on the login page


	@skip @TC_103208
	Scenario: User activation email with non active user account
		Given My user account has already been activated
		When I click on Activate account on the login screen and fill the details and click on send link
		Then A mail is received informing me that my account is already active

	@skip @TC_103209
	Scenario: User activation with already active user account
		Given My user account has been added to a tenant and has not been previously been activated
		When I click on Activate account 
		And fill the details and click on send link
		Then I receive an email the account has been registered for a glasswall account 
		And the email has a link to click to complete set up

	@skip @TC_103212
	Scenario: User activation with inactive user account
		Given I have received a user set up email and my user is associated with a tenant
		When I click the link in the email 
		And fill the details and click set
		Then the user account is activated 
		And I am able to log into the tenant

	