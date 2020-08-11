Feature: Transaction log View

	Background: I am logged in to the portal 
		Given I have logged into the portal	

    @TC_103135
    Scenario: Transaction Log file outcome tooltips
        Given I am on transaction log screen 	
	    When the file outcomes are hovered over	
		Then the tooltip is displayed

    @TC_101732
    Scenario: Transaction Log pagination
        Given Given I am on transaction log screen 	
	    When There are more items than can be displayed on one page in the log	
		Then A change page button is clicked and the correct page is displayed

