@fileDetailsView
Feature: File Details View

    @TC_103214
    Scenario: File details validation
        Given I am logged into the portal	
	    And there are mails in the transaction log with attachments	
	    When I click on a mail and click on file	
	    Then I am taken to the file details screen	
	    And this contains all the relevant information required and also contains a request release button
	
				