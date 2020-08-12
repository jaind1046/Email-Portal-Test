@userGroup
Feature: User Groups Admin
	
	Background:
		Given I am on the users groups page


    @TC_103222
    Scenario: Add a new user group
    	When I click the add new group button and fill out the fields and click save	
	    Then The new group is saved	and a changes have been saved message is displayed

    @TC_103223
    Scenario: Delete a user group
   		When I have a pre-existing user group and I click the mark for deletion button 
		And save changes by clicking Yes save now
	    Then The user group is deleted	and a changes have been saved 
		And Notification appears
	 
    @TC_103224
    Scenario: Edit a user group
    	When I have a pre-existing user group and I change the Name or the user role 
		And I click save changes	
	    Then The changes are saved 
		And A changes have been saved message appears	
	 	

    @TC_103235
    Scenario: Access the users groups without relvent permission
    	Given My account does not have permissions to access the Users groups	
	    When I log in	
	    Then Users tab is unavailable and I am unable to reach users groups	
	