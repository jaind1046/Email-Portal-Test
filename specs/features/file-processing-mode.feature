@fileProcessingMode
Feature: FileProcessingMode feature

Background: Logged in to Portal
	Given I am logged into the portal

@TC_99281
Scenario: Send Mail with Analysis only mode set to on
  	When Analysis only mode is set to On and the CMP media type is set to hold and a mail is sent through with an infected attachement	
	Then the mail is received by the recipient with the file
	
@TC_103150 
Scenario: Send Mail with Analysis only mode set to off
  	
	When Analysis only mode is set to off and the CMP Media Type Type is set to hold and a mail is sent through with an infected attachement	
	Then the mail is received by the recipient with the file