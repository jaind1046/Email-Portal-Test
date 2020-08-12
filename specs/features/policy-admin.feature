@policyAdmin
Feature: policy Administration

    Background: Logged in to Portal
        Given I have logged into the portal	

    @TC_101769
    Scenario: Retention Policy is updated when valid values are entered			
        
        Given I have navigated to the system setting screen	and I Update retention policies to be between 0 and 90
        When I click save	
        Then the results are saved
    
    @TC_101723
    Scenario: Retention values visible when user has correct permissions			
        Given I have permissions to edit the data retention policies	
        When I navigate to the system settings tab	
        Then I am able to see the data retention values

    @TC_101724
    Scenario: Retention values not visible when user has incorrect permissions			
        Given I have logged into the portal	
        And I have the view system configuration disabled on my account	
        When I navigate to the configuration page	
        Then the page is unavailable

    @TC_101910
    Scenario: Retention period set to 91 is not successfully saved 			
        Given I am on the Configuration>System Settings screen 
        When I am trying to set data retention period to 91	
        And I click Save Changes	
        Then The field validation error: Please enter a value less than or equal to 90 is displayed, 
        And The screen validation error: System settings could not be saved , please check your input is displayed	
        And The value is not saved	

    @TC_101911
    Scenario: Retention period set to 0 is successfully saved 			
        Given I am on the Configuration>System Settings screen	
        When I set a data retention period of 0	and save changes
        Then The value is saved and the success message: is displayed	
 

    @TC_101934
    Scenario: Retention period set to -1 is not successfully saved 			
        Given I am on the Configuration>System Settings screen 
        When I set a data retention period of -1	
        And I click Save Changes	
        Then The field validation error: Please enter a positive value is displayed,	
        And The screen validation error: System settings could not be saved , please check your input is displayed 
        And The value is not saved	