@userGroup
Feature: User Groups Admin
	
	Background:
		Given I am on the users groups page


    @TC_103222
    Scenario: Add a new user group
    	When I click the add new group button and fill out the fields and click save	
	    Then the new group is saved	and a changes have been saved message is displayed

    @TC_103223
    Scenario: Delete a user group
   		When I have a pre-existing user group and I click the mark for deletion button and save changes	by clicking Yes save now
	    Then the user group is deleted	and a changes have been saved notification appears
	 
    @TC_103224
    Scenario: Edit a user group
    	When I have a pre-existing user group and I change the Name or the user role and I click save changes	
	    Then the changes are saved and a changes have been saved message appears	
	 	

    @TC_103235
    Scenario: Access the users groups without relvent permission
    	Given my account does not have permissions to access the Users groups	
	    When I log in	
	    Then users tab is unavailable and I am unable to reach users groups	
	