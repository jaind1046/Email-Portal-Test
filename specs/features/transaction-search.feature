Feature: Transaction Search

    @TC_103134
    Scenario: Transaction log number of items filter
    	Given I have logged into the portal	
	    And I have navigated to the transaction log	
	    When the number of items filter is changed to x	
		# Then a list is displayed showing x number of items  

    @TC_103213
    Scenario: Transaction search validation
	    Given I have logged into the Portal	
	    And I am on the transaction log screen	
	    When I add a filter	
	    Then the transaction log only displays items that match the filter I have applied	
				