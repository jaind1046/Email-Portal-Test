@fileReleaseRequest
Feature: FileReleaseRequest

	@TC_99646
	Scenario: Request the release of a held file to a recipient via Portal
		# Given a transaction's file is held based on a set policy
		# And i navigate to the portal transaction log
		# And i select the file to open the "File Details" screen.
		# When i click "REQUEST RELEASE"
		# And i enter the recipient mailbox and click "REQUEST".
		# Then the success notification is displayed as: "File Release Request Sent"
		# And The File Release Request count is increased 
	
	@TC_101095
	Scenario: Request the release of a held file via receipt held file report
		# Given I send a mail with no subject with a file attachment
		# And the file is held based on a set policy
		# And i navigate to the portal transaction log
		# And i request the file release
		# Then The File appears as pending with the Release Request pending count increased by 1

