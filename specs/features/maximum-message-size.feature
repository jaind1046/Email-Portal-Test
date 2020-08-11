@MaxMessageSize
Feature: MaximumFileSizeApplication.feature

Background: Logged into portal
	Given I am logged into the portal

@TC_103152
Scenario: Change Maximum message size to greater then 50MB
     Given I am on system settings screen
     When I set the Maximum message size in megabytes to greater than 50 and save
     Then the Field notification error: Please enter a value less than or equal to 50 and System Settings could not be save, please check your input is displayed 

@TC_103153
Scenario: Change Maximum message size to less then 50MB
	 Given I am on system settings screen	
	 When I set the Maximum message size in megabytes to less than 50 and save	
	 Then the change is saved


@TC_99283
Scenario: Send Mail over maximum message size
	 Given I have set the maximum message size to less than 50	
	 When I send a mail that is greater than the specified size	
	 Then the mail validation is received and mail is not transmitted to the recepient
