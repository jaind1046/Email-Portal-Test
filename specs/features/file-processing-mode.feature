@fileProcessingMode
Feature: FileProcessingMode feature

@TC_99281
Scenario: Send Mail with Analysis only mode set to on
  	Given I am logged into the portal	
	And Analysis only mode is set to On and the CMP media type is set to hold	
	When a mail is sent through with an infected attachement	
	Then the mail is received by the recipient with the file
	

@TC_103150 
Scenario: Send Mail with Analysis only mode set to off
  	Given I am logged into the portal	
	And Analysis only mode is set to off and the CMP Media Type Type is set to hold	
	When a mail is sent through with an infected attachement	
	Then the mail is received by the recipient with the file