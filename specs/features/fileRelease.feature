Feature: FileRelease

@TC_99645
Scenario: Request the release of a held file to recipient via Portal
    Given a transaction's file is held based on a set policy	
	And i navigate to the portal transaction log	
	And i select the file to open the "File Details" screen.	
	When i click "REQUEST RELEASE"	
	And i enter the recipient mailbox and click "REQUEST".	
	Then the success notification is displayed as: "File Release Request Sent"	
	And The File Release Request count is increased by 1	




@TC_99708
Scenario: Request the release of a held file via recipient held file report
    Given i a held file based due to a set policy	
	And i open the held file report link in the mail as the recipient	
	When i request the file release to the required email <ReleaseToAddress> and submit	
	And i navigate to the portal pending file release request page	
	Then The file is available	
	And the File Release Request pending count is increased by 1	


@TC_100166
Scenario: Approve a held file release request
	Given i have a pending file release request	
	And i navigate to the portal pending file release request page	
	When i open the file to be released	
	And i click "Release File"	
	Then the success notification is displayed	
	And the File Release Request pending count is decreased by 1	
	And The approval notification mail is received with the file attachment	



@TC_100985
Scenario: Deny a held file release request
	Given i have a pending file release request	
	And i navigate to the portal pending file release request page	
	When i open the file to be released	
	And i click "Deny"	
	Then the success notification: 'File Release Has Been Denied' is displayed	
	And the File Release Request pending count is decreased by 1	
	And The deny notification mail is received by the recipient	
