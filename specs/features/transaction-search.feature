Feature: Transaction Search

Background: 
		Given I have logged into the portal	
	    And I have navigated to the transaction log	

    @TC_103134
    Scenario: Transaction log number of items filter
	    When the number of items filter is changed to x	
		# Then a list is displayed showing x number of items  

    @TC_103213
    Scenario: Transaction search validation
	    When I add a filter	
	    Then the transaction log only displays items that match the filter I have applied	
				