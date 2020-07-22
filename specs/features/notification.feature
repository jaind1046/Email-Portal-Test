Feature: Notification

    Feature Description

    @TC_
    Scenario: New Password Reset Confirmation email received and all links and actions work
        Given I have received a password reset request email
        And I have clicked the link
        And I have completed all fields in the form
        When I submit a new password
        And I have received a password reset confirmation email
        Then all links in received email work

    @TC_
    Scenario: New Password Reset Request email received and all links and actions work
        Given I have opened the forgotten password from on the portal
        And I have submitted a valid email of an existing user
        When I click SEND LINK
        And have received the password reset request email

    @TC_
    Scenario: Already Actived Account email received and all links and actions work
        Given I have cliked the activate account button on the portal
        And I have entered the email of an existing active user
        When I click SEND LINK
        Then I should receive the account already activated email
        And all links in received email work

    @TC_
    Scenario: Newly Actived Account email received and all links and actions work
        Given I have cliked the activate account button on the portal
        And I have entered the email of an new inactive user
        When I click SEND LINK
        Then I should receive the account activated email
        And all links in received email work

    @TC_
    Scenario: New user addition email received and all links and actions work
        Given I am on the user page of the portal
        When I add and save a new user
        Then I receive the new user notification email
        And all links in received email work
