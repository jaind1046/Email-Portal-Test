@TenancyOnboarding
Feature: TenancyOnboarding.feature

Background: I am logged in as inactive tenant with right permission
	Given I am logged in as a inactive tenant with the Edit configuration role
	
 @TC_101553
Scenario: Process Mail flow setup with a blank maximum message size field: 
	Given I am on the System Settings setup screen 	
	When I click Save  
	And click Next with a blank message size field	
	Then The field validation error: Please enter a valid number is displayed 
	And The screen validation error: System Settings could not be saved, please check your input, 
	And I am still on same screen 
	And The message size is not updated on System settings	


@TC_101199
Scenario: Start a tenent activation from the Mail Flow setup reminder: 
	Given I have selected the option: I'll Do This Later for inactive tenant	
	When I click Ok in the reminder prompt and the help icon 
	And click the option: Return to Mail Flow Setup	
	Then The activation setup prompt is displayed	

 
@TC_101212
Scenario: Restart Mail flow after cancellation: 
	Given I go through and cancel the Mail Flow setup process 	
	When I restart the setup 	
	Then The previously saved setup screen is returned	
 
@TC_101211
Scenario: Login After completing a tenent Mail flow setup: 
	Given I have completed the tenant Mail Flow setup	
	When I log out and log back in	
	Then The setup dialog is not displayed	

 
@TC_101552
Scenario: Process Mail flow setup with a message size over 50MB
	Given I am on the System Settings setup screen 	
	When I save the settings with message size 51	
	Then The field validation error: Please enter a value less than or equal to 50 is displayed 
	And The screen validation error: System Settings could not be saved 
	And I am on same screen
	And Message size is not updated on Systsem settings	
	 
 
@TC_101434
Scenario: Process Mail flow setup without a relay Endpoint entry
	Given I am in the process of tenant activation	and I am on the Relay Endpoint screen
	When I click on Save and Next without adding a endpoint record	
	And I select the option: Yes, Save and Next on the warning screen
	Then The Relay Endpoint screen is returned with the error:Relay Endpoints could not be saved, you must enter at least one Relay Endpoint. is displayed 
	And The next screen is not returned 	

@TC_101554
Scenario: Process Mail flow with a maximum message size of 0
	Given I am on the System Settings setup screen and 	
	When I enter 0 in maximum message size 
	And Click Save and Next
	Then The settings are saved 
	And the next screen is displayed 
	And the message size is set to 0 in System Settings screen	

 
@TC_101617
Scenario: Process mail flow setup without a valid Allowed Domain 
	Given I proceed through the setup to the summary screen without any validated Allowed Domain	
	When I complete the setup and I verify the tenant's activation status in the DB	
	Then the tenant is not active	


@TC_101619
Scenario: Process mail flow setup with a valid Domain and Relay Endpoint
	Given I proceed through the setup to the summary screen with a valid Domain and a Relay Endpoint and complete the setup	
	When I verify the tenant's activation status in the DB	
	Then The tenant is set to active 
	And the Mail Flow reminder is not available	


 