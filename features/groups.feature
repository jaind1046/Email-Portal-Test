Feature: User Groups Admin


    @TC_103222
    Scenario: Add a new user group
    	Given I am on the users groups page	
	    When I click the add new group button	
	    And fill out the fields	
	    And click save	
	    Then the new group is saved	
	    And a changes have been saved message is displayed	

    @TC_103223
    Scenario: Delete a user group
   		Given I am on the users groups page	
	    And I have a pre-existing user group	
	    When I click the mark for deletion button	
	    And save changes	
	    And "Yes save now"	
	    Then the user group is deleted	
	    And a changes have been saved notification appears	

    @TC_103224
    Scenario: Edit a user group
    	Given I am on the users groups page	
	    And I have a pre-existing user group	
	    When I change the Name or the user role	
	    And I click save changes	
	    Then the changes are saved	
	    And a changes have been saved message appears	

    @TC_103235
    Scenario: Access the users groups without relvent permission
    	Given my account does not have permissions to access the Users groups	
	    When I log in	
	    Then users tab is unavailable	
	    And I am unable to reach users groups	