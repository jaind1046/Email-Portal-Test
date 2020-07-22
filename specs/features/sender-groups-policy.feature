Feature: Sender Group Policy Admin

    Feature Description

    Background:
        Given I'm on the Policy Sender Groups draft page

    @TC_99132
    Scenario: Add a new policy sender group
        When I add a new Sender group with a valid Mail box name and save
        Then the new sender group is saved and the success notification: "Sender Group has been saved" is displayed

    @TC_99205
    Scenario: Delete a Default Policy Group
        When I select the default group
        And I click Delete
        Then The warning is displayed as: 'The Default Sender Group cannot be deleted'

    @TC_99207
    Scenario: Publish a Sender Policy Group
        Given  I have added or edited & saved a Sender Group
        When I click Publish
        Then the Current Policy is updated with the new one to the current date and time
        And the Previous Policy is updated to the previous current policy



    @TC_103060
    Scenario: Add a new policy sender group with a domain
        When I add a new Sender group with a valid Domain name and save
        Then The new sender group is saved and the success notification: "Sender Group has been saved" is displayed