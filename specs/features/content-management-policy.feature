@cmp
Feature: Content Management Policy Admin

    Background:
        Given I am on the CMP draft page

    @TC_99219
    Scenario: Add a Content Management Policy
        When I add a new Content Management Policy with the default media type, Supported groups and Content Flags and save
        Then The policy is saved with the success notification "Content Management Policy has been saved"

    @TC_99220
    Scenario: Edit Content Management Policy
        When I update a selected Content Management Policy with the default media type, Supported groups and Content Flags and save
        Then The policy is saved with the success notification "Content Management Policy has been saved"

    @TC_99221
    Scenario: Delete a Content Management Policy
        When I click Delete on a seleted non default rule
        Then The Policy is deleted

    @TC_99638
    Scenario: Publishing a policy rule
        When I have added or edited & saved a policy and I click the PUBLISH button
        Then the success message is displayed and the Published changes are reflected by the current policy processing rules
     