@processingrules
Feature: Processing Rules Admin

    Feature Description


    Background:
        Given I am on the Processing rules draft page

    @TC_99178
    Scenario: Add a processing rule
        When I add a new processing rule
        And I Save changes and Publish
        Then The processing rule is saved and the policy is published

    @TC_102888
    Scenario: Edit, save and publish a processing rule with a changed SENDER GROUP
        Given I change the Sender Group details for a processing rule
        And I Save changes and Publish
        Then The processing rule is saved and the policy is published

    @TC_99179
    Scenario: Delete a processing Rule
        When I click the "trash" icon to delete processing rule
        And I save changes and confirm
        Then I see the success notification "PROCESSING RULES HAVE BEEN SAVED"
