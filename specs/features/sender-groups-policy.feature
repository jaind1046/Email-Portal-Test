@senderGroup
Feature: Sender Group Policy Admin

    Feature Description

    Background:
        Given I am on the Policy Sender Groups draft page

    @TC_Sender_Group_99132
    Scenario: Add a new policy sender group
        When I add a new Sender group with a valid Mail box name and save
        Then the new sender group is saved and the success notification: Sender Group has been saved is displayed

    @TC_Sender_Group_99205
    Scenario: Delete a Default Policy Group
        Given I select the default group
        When I click Delete
        Then The warning is displayed as: The Default Sender Group cannot be deleted

    @TC_Sender_Group_99207
    Scenario: Publish a Sender Policy Group
        Given  I add a new Sender group with a valid Mail box name and save
        When I click Publish
        Then The Current Policy is updated with the new one to the current date and time 
        And the Previous Policy is updated to the previous current policy
     

    @TC_Sender_Group_103060
    Scenario: Add a new policy sender group with a domain
        When I add a new Sender group with a valid Domain name 
        And I click on save sender policy
        Then The new sender group is saved and the success notification: Sender Group has been saved is displayed

    @TC_Sender_Group_103061
    Scenario: Delete a policy sender group which is not default
        When I click on delete sender policy
        And I click on save sender policy
        Then The sender group is deleted and the success notification: Sender Group has been deleted is displayed

    @TC_Sender_Group_103062
    Scenario: Delete a new policy sender group
        When I delete a new Sender group with a valid Domain name
        And Click cancel
        Then The sender group is not deleted and there are no changes

    @TC_Sender_Group_103063
    Scenario: Add valid values and save
        When I add a new Sender group with all valid values
        And I click save
        Then The new sender group is saved

    @TC_Sender_Group_103064
    Scenario: Add invalid value for domain and save
        When I add a new Sender group with a invalid Domain name
        And I click save
        Then An error pops up for invalid domain

    @TC_Sender_Group_103065
    Scenario: Add invalid value for email and save
        When I add a new Sender group with a invalid mail id
        And I click save
        Then An error pops up for invalid email

    @TC_Sender_Group_103066
    Scenario: Add invalid value for group name and save
        When I add a new Sender group with a invalid group name
        And I click save
        Then An error pops up for invalid group name