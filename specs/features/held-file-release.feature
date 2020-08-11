
Feature: HeldFileRelease.feature

@TC_100985
Scenario: Deny a held file release request
     Given I have a pending file release request and I am on pending file release request page		
	 When I open the file to be released 
	 And click Deny
	 Then The success notification: File Release Has Been Denied is displayed and Release Request pending count is decreased by 1 
	 And  Deny notification mail is received by the recipient

@TC_100166
Scenario: Approve a held file release request
     Given I have a pending file release request and I am on pending file release request page		
	 When I open the file to be released 
	 And click Release File	
	 Then The success notification is displayed	and Release Request pending count is decreased by 1 
	 And The approval notification mail is received with the file attachment


@TC_101096
Scenario: Release a held file sent in a mail with no subject
     Given I send a mail with no subject with a file attachment and The file is held based on a set policy and its release has been requested		
	 When I go to the portal File Release Requests 
	 And release the file	
	 Then The success notification is displayed	and Release Request pending count is decreased by 1 
	 And The approval notification mail is received with the file attachment

