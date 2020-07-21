
Feature: HeldFileRelease.feature

@TC_100985
Scenario: Deny a held file release request
     Given i have a pending file release request	
	 And i navigate to the portal pending file release request page	
	 When i open the file to be released	
	 And i click "Deny"	
	 Then the success notification: 'File Release Has Been Denied' is displayed	
	 And the File Release Request pending count is decreased by 1	
	 And The deny notification mail is received by the recipient	
    
@TC_100166
Scenario: Approve a held file release request
     Given i have a pending file release request	
	 And i navigate to the portal pending file release request page	
	 When i open the file to be released	
	 And i click "Release File"	
	 Then the success notification is displayed	
	 And the File Release Request pending count is decreased by 1	
	 And The approval notification mail is received with the file attachment	
    

@TC_101096
Scenario: Release a held file sent in a mail with no subject
     Given I send a mail with no subject with a file attachment 	
	 And the file is held based on a set policy	
	 And its release has been requested	
	 When I go to the portal File Release Requests	
	 And I open and release the file'	
	 Then the success notification is displayed 	
	 And The file is released and is available to the recipient	
	 And the pending file release request is decreased by 1	
