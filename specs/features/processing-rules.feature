@processingrules
Feature: Processing Rules Admin

    Feature Description

    Background:
        Given I am on the Processing rules draft page

    @TC_99178
    Scenario: Add a processing rule
        Given I add a new processing rule
        When I Save changes and Publish
        Then The processing rule is saved and the policy is published

    @TC_102888
    Scenario: Edit, save and publish a processing rule with a changed SENDER GROUP
        Given I change the Sender Group details for a processing rule
        When I Save changes and Publish
        Then The processing rule is saved and the policy is published

    @TC_99179
    Scenario: Delete a processing Rule
        Given I click the trash icon to delete processing rule
        When I save changes and confirm
        Then I see the success notification PROCESSING RULES HAVE BEEN SAVED

    Scenario: Edit, save and publish a processing rule with a changed RECEIVER GROUP
        Given I change the Receiver Group details for a processing rule
        When I Save changes and Publish
        Then The processing rule is saved and the policy is published

    Scenario: Edit, save and publish a processing rule with a changed Content Management
        Given I change the Content for a processing rule
        When I Save changes and Publish
        Then The processing rule is saved and the policy is published

    Scenario: Delete a processing Rule
        Given I click the trash icon to delete processing rule
        When I cancel changes and confirm
        Then I return to the processing rule screen

    Scenario: Save a modal
        Given I am on the modal
        When I click on save modal
        Then The modal is saved

    Scenario: Delete a modal
        Given I am on the modal
        When I click on delete modal
        Then The modal is deleted