@fileDetailsView
Feature: File Details View

    @TC_103214
    Scenario: File details validation
        Given I am logged into the portal and There are mails in the transaction log with attachments  	
		When I click on a mail and click on file to open file details screen
	    Then  It should have the relevant information required and release button	
	    
	
				