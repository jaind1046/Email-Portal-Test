
Feature: TransactionIdInsertionToMailHeader.feature

@TC_99282
Scenario:Send Mail with configuration ID set to on
     Given I am logged into the portal	
	 And the "Insert Transaction ID into mail headers" is set to On	
	 When I send a mail through with or without an attachment	
	 And I open the processed mail	
	 Then the transaction ID is visible in the header of the processed email


@TC_103151
Scenario:Send Mail with configuration ID in header set to off
     Given I am logged into the portal	
	 And the "Insert Transaction ID into mail headers" is set to Off	
	 When I send a mail through with or without an attachement	
	 And I open the processed mail	
	 Then there is no transaction ID in the header of the processed email
