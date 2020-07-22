

Feature: TenancyOnboarding.feature

 @TC_101553
Scenario: Process Mail flow setup with a blank maximum message size field: 
     Given I am logged in as a inactive tenant with the Edit configuration role	
	 And I am on the System Settings setup screen 	
	 When I click Save and Next with a blank message size field	
	 Then the field validation error: "Please enter a valid number" is displayed coupled with the screen validation error: "System Settings could not be saved, please check your input"	
	 And the next screen is not displayed	
	 And when i navigate to Configuration>System Settings, the message size is not updated	


@TC_101199
Scenario: Start a tenent activation from the Mail Flow setup reminder: 
	 Given I am logged in as a inactive tenant	
	 And I have selected the option: "I'll Do This Later"	
	 When I click Ok in the reminder prompt 	
	 And I click the help icon 	
	 And click the option: "Return to Mail Flow Setup" 	
	 Then the activation setup prompt is displayed	

 
@TC_101212
Scenario: Restart Mail flow after cancellation: 

	 Given I logged in as a inactive tenant 	
	 And I go through and cancel the Mail Flow setup process	
	 When i restart the setup 	
	 Then the previously saved setup screen is returned	
 
@TC_101211
Scenario: Login After completing a tenent Mail flow setup: 
	 Given I am log in as a inactive tenant 	
	 And i have completed the tenant Mail Flow setup	
	 When i log out and back in	
	 Then the setup dialog is not displayed	

 
@TC_101552
Scenario: Process Mail flow setup with a message size over 50MB: 
	 Given I am logged in as a inactive tenant with the Edit configuration role	
	 And I am on the System Settings setup screen 	
	 When I save the settings with message size 51	
	 Then the field validation error: "Please enter a value less than or equal to 50" is displayed coupled with the screen validation error: "System Settings could not be saved"	
	 And the next screen is not displayed	
	 And when i navigate to Configuration>System Settings, the message size is not updated	

 
@TC_101434
Scenario: Process Mail flow setup without a relay Endpoint entry: 
	 Given I am logged in as a inactive tenant	
	 And I am in the process of tenant activation	
	 And I am on the Relay Endpoint screen	
	 When I click on Save and Next without adding a endpoint record	
	 And I select the option: "Yes, Save and Next" on the warning screen	
	 Then the Relay Endpoint screen is returned with the error:"Relay Endpoints could not be saved, you must enter at least one Relay Endpoint." is displayed	
	 And the next screen is not returned 	

 
@TC_101554
Scenario: Process Mail flow with a maximum message size of 0: 
	 Given I am logged in as a inactive tenant with the Edit configuration role	
	 And I am on the System Settings setup screen 	
	 When I enter 0 and click Save and Next 	
	 Then the settings are saved and the next screen is displayed	
	 And when i navigate to Configuration>System Settings, the message size is set to 0	

 
@TC_101617
Scenario: Process mail flow setup without a valid Allowed Domain : 
	 Given I am logged in as a inactive tenant with the Edit System Configuration role	
	 And I proceed through the setup to the summary screen without any validated Allowed Domain	
	 When i complete the setup	
	 And i verify the tenant's activation status in the DB	
	 Then the tenant is not active	


@TC_101619
Scenario: Process mail flow setup with a valid Domain and Relay Endpoint: 
	 Given I am logged in as a inactive tenant with the Edit System Configuration role	
	 And I proceed through the setup to the summary screen with a valid Domain and a Relay Endpoint	
	 When i complete the setup	
	 And i verify the tenant's activation status in the DB	
	 Then the tenant is set to active	
	 And the Mail Flow reminder is not available	

 