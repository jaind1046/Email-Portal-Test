Feature: Alowed Domains Admin

    

    Background: Allowed Domains page
        Given I'm on the Allowed Domains page

    Scenario: Add a Allowed Domain
        When I add a valid Domain and save
        Then The Domain is validated with a green tick and saved

    Scenario: Upload a Allowed Domain csv file
        When I click on the "Import" icon
        And I select a csv file containing 1 or more valid Allowed Domains
        Then the domain records are added and validated
        And the success notification is displayed

    Scenario: Delete a Allowed Domain
        When I click delete on a existing Domain entry and save changes
        Then The Domain record is deleted

    Scenario: Edit a Allowed Domain
        When I update a current Allowed Domain with a valid one and save
        Then The Domain is validated with a green tick

    Scenario: Add a invalid Allowed Domain
        When I click + to add a Allowed Domain
        And I enter a invalid Domain and save
        Then The Domain is not validated with a warning icon

    Scenario: Revert a Allowed Domain Deletion
        When I click delete on a existing Domain entry and revert
        Then The Domain record is not deleted