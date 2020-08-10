@allowedDomain
Feature: Alowed Domains Admin

    Background: Allowed Domains page
        Given I am logged in as required tenant
        Given I am on the Allowed Domains page

       
    @TC_99225
    Scenario: Add a Allowed Domain
        
        When I add a valid Domain and save
        Then The Domain is validated with a green tick

    @TC_101253
    Scenario: Upload a Allowed Domain csv file
        When I Import a csv file containing a valid Allowed Domain
        Then The Domain is validated with a green tick

    @TC_99227
    Scenario: Delete a Allowed Domain
        When I click delete on a existing Domain entry and save changes
        Then The Domain record is deleted

    @TC_99229
    Scenario: Edit a Allowed Domain
        When I update a current Allowed Domain with a valid one and save
        Then The Domain is validated with a green tick
   
    @TC_103056
    Scenario: Add a invalid Allowed Domain
        When I enter a invalid Domain and save
        Then The Domain is not validated with a warning icon
    
    @TC_103057
    Scenario: Revert a Allowed Domain Deletion
        When I click delete on a existing Domain entry and revert
        Then The Domain record is not deleted