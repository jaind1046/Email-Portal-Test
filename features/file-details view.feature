Feature: File Details View

    @TC_103214
    Scenario: File details validation
        Given I am logged into the portal	
	    And there are mails in the transaction log with attachments	
	    When I click on a mail	
	    And click on a file	
	    Then I am taken to the file details screen	
	    And this contains all the relevant information required	
	    And also contains a request release button	
				