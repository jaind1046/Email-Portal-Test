Feature: Receiver Group Policy Admin

   Feature Description

   Background:
      Given I am on the Policy Receiver Groups draft page

   @TC_99208
   Scenario: Publish a Receiver Policy Group

      When I have added or edited & saved a Receiver Group
      And I click Publish
      Then the Current Policy is updated with the new one to the current date and time
      And the Previous Policy is updated to the previous current policy

   @TC_103061
   Scenario: Delete a Default Receiver Policy Group
      Given I'm on Policy Receiver Groups draft page
      When I select the default group
      And I click Delete
      Then The warning is displayed as: 'The Default Sender Group cannot be deleted'