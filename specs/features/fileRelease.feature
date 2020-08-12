@fileRelease
Feature: FileRelease

@TC_99645
Scenario: Request the release of a held file to recipient via Portal
    Given I have held file based due to a set policy, I navigate to the portal transaction log and I select the file to open the File Details screen    
    When I navigate to the transaction log and REQUEST RELEASE and enter the recipient mailbox and click REQUEST
    Then the success notification is displayed as: File Release Request Sent and The File Release Request count is increased by 1   


@TC_99708
Scenario: Request the release of a held file via recipient held file report
    Given I have held file based due to a set policy and 
	When I open the held file report link in the mail as the recipient	
	And I request the file release to the required email and i navigate to release request page  	
	Then The file is available to release from request page 
	And The File Release Request pending count is increased by 1	

@TC_100166
Scenario: Approve a held file release request
	Given I have a pending file release request	
	When I navigate to the pending file release request page and click Release File
	Then The success notification is displayed and Request pending count is decreased by 1 
	And approval notification mail is received with the file attachment


@TC_100985
Scenario: Deny a held file release request
	Given I have a pending file release request	
	When I navigate to the pending file release request page and click Deny
	Then The notification: File Release Has Been Denied is displayed and Request pending count is decreased by 1 
	And deny notification mail is received by the recipient		
	