@receiverGroup
Feature: Receiver Group Policy Admin

   Feature Description

   Background:
      Given I am on the Policy Receiver Groups draft page

   @TC_Receiver_Froup_99208
   Scenario: Publish a Receiver Policy Group
      Given I have added or edited & saved a Receiver Group
      When I click Publish
      Then The Current Policy is updated with the new one to the current date and time 
      And the Previous Policy is updated to the previous current policy

   @TC_Receiver_Froup_99209
   Scenario: Delete a Default Receiver Policy Group
      Given I am on the Policy Receiver Groups draft page
      When I select the default group 
      And I click on delete receiver policy button
      Then The warning is displayed as: The Default Sender Group cannot be deleted

   @TC_Receiver_Froup_99210
   Scenario: Add a new Receiver Policy Group
      Given I am on Policy Receiver Groups draft page
      When I click on add new receiver group button
      Then a new Policy Receiver Group is added

   @TC_Receiver_Froup_99211
   Scenario: Delete a Receiver Policy Group
      Given I am on Policy Receiver Groups draft page
      When I select the receiver policy group
      And I click on delete receiver policy button
      Then The group is removed permanently

   @TC_Receiver_Froup_99212
   Scenario: Add a new receiver mailbox Group
      Given I am on Policy Receiver Groups draft page
      When I click on add new receiver group button
      Then a new receiver mailbox group is created

   @TC_Receiver_Froup_99213
   Scenario: I can set a valid email id
      Given I am on Policy Receiver Groups draft page
      When I fill a valid email in mailbox
      Then I get a valid email in mailbox

   @TC_Receiver_Froup_99214
   Scenario: I fill a invalid email in mail input box
      Given I am on Policy Receiver Groups draft page
      When I fill a invalid email in mail input box
      Then I get a null email in mailboxx
      And I get an error message alert

   @TC_Receiver_Froup_99215
   Scenario: I fill an invalid email id
      Given I am on Policy Receiver Groups draft page
      When I set an invalid email id
      Then I get an error message alert

   @TC_Receiver_Froup_99216
   Scenario: I fill a policy option name input
      Given I am on Policy Receiver Groups draft page
      When I set a policy option name input
      Then I can get a policy option name input

