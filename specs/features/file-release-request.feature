@fileReleaseRequest
Feature: FileReleaseRequest


	@TC_99646
	Scenario: Request the release of a held file to a recipient via Portal
		Given I am logged into the portal and a transaction's file is held based on a set policy, 
		When I navigate to transaction log and I click on file, 
		And Enter recipient mailbox and click REQUEST RELEASE 
		Then The success notification is displayed as: File Release Request Sent 
		And The File Release Request count is increased


	@TC_101095
	Scenario: Request the release of a held file via receipt held file report
		Given I send a mail with no subject with a file attachment and the file is held based on a set policy
		When I navigate to the portal transaction log 
		And I request the file release
		Then The File appears as pending with the Release Request pending count increased by 1

