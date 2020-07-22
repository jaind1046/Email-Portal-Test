Feature: Transaction log View


    @TC_103135
    Scenario: Transaction Log file outcome tooltips
        Given the portal has been logged into	
	    And the displayed screen is transaction log	
	    When the file outcomes are hovered over	
		Then the tooltip is displayed

    @TC_101732
    Scenario: Transaction Log pagination
        Given I have logged into the portal	
	    And I have navigated to the transaction log	
	    And there are more items than can be displayed on one page in the log	
	    When a change page button is clicked	
		Then the correct page is displayed

