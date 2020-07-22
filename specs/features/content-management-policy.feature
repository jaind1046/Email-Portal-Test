Feature: Content Management Policy Admin


    Background:
        Given I'm on the CMP draft page

    @TC99219
    Scenario: Add a Content Management Policy
        When I add a new Content Management Policy with the default media type, Supported groups and Content Flags and save
        Then The policy is saved with the success notification "Content Management Policy has been saved"

    @TC99220
    Scenario: Edit Content Management Policy
        When I update a selected Content Management Policy with the default media type, Supported groups and Content Flags and save
        Then The policy is saved with the success notification "Content Management Policy has been saved"

    @TC99221
    Scenario: Delete a Content Management Policy
        When I click Delete on a seleted non default rule
        Then The Policy is deleted

    @TC99638
    Scenario: Publishing a policy rule
        Given I have added or edited & saved a policy
        When I click the "PUBLISH" button
        Then the success message is displayed
        And the Published changes are reflected by the current policy processing rules