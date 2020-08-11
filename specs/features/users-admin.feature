Feature: User Configuration

	Background:
		Given I am on the portal login screen


	@TC_103208
	Scenario: User activation email with non active user account
		Given My user account has already been activated
		When I click on Activate account and fill the details and click on send link
		Then a mail is received informing me that my account is already active

	@TC_103209
	Scenario: User activation with already active user account
		Given My user account has been added to a tenant and has not been previously been activated
		When I click on Activate account and fill the details and click on send link
		Then I receive an email the account has been registered for a glasswall account and the email has a link to click to complete set up

	@TC_103212
	Scenario: User activation with inactive user account
		Given I have received a user set up email and my user is associated with a tenant
		When I click the link in the email and fill the details and click set
		Then the user account is activated and I am able to log into the tenant

	@TC_99162
	Scenario: Add a new user
		Given I am logged in as required tenant and on the users screen
		When I add a new user with a valid email address
		Then the new user record is saved

	@TC_b99162
	Scenario: Add a new user with a non existing email
		Given I am on the users screen
		When I add a new user with a non existing email address
		Then a warning icon is displayed and shows the tooltip warning Email Address Requires Confirmation when hovered over

	@TC_99188
	Scenario: Delete an admin user
		Given I am logged into the portal and on user screen
		When I try to delete an admin user
		Then I receive notification 


	@TC_99189
	Scenario: Delete a non admin user
		Given I am logged into the portal and on user screen
		When I click the delete user button next to a non admin user
		Then the user is deleted and the success notification is diplayed
