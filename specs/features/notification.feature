@notification
Feature: Notification

    Making sure all email notifications working

    @TC_103000
    Scenario: New Password Reset Confirmation email received and all links and actions work
        Given I have received a password reset request email
        When I have clicked the link 
        And completed all form fields and click submit
        Then I have received a password reset confirmation email and all links in received email work
    
    @TC_103001
    Scenario: New Password Reset Request email received and all links and actions work
        Given I have opened the forgotten password from on the portal
        When I have submitted a valid email of an existing user and click SEND LINK
        Then I have received the password reset request email

    @TC_103002
    Scenario: Already Actived Account email received and all links and actions work
        Given I have cliked the activate account button on the portal
        When I have entered the email of an existing active user and Click on SEND LINK
        Then I should receive the account already activated email all links in received email work
      
    @TC_103101
    Scenario: Newly Actived Account email received and all links and actions work
        Given I have cliked the activate account button on the portal
        When I have entered the email of an new inactive user and click SEND LINK
        Then I should receive the account activated email all links in received email work
 
    @TC_103102
    Scenario: New user addition email received and all links and actions work
        Given I am on the user page of the portal
        When I add and save a new user
        Then I receive the new user notification email and all links in received email work
     
