Feature: Password reset


    @TC_99161
    Scenario: Change Password in user admin
        Given I am logged into the portal
        When I have clicked on Change Password
        And I have been taken to the change password screen
        When I enter my current password and new password
        And I click save
        Then a success notification is displayed

    @NC
    Scenario: Go to password reset page
        Given I am on the login page
        When I click Forgotten Password
        Then The password reset page is displayed


    @TC_99113
    Scenario: Successful password reset
        
        When I click Forgotten Password
        And I enter the email address & click send link with the captcha validation
        And I receive the password reset mail
        When I open the mail and click the password reset link
        And I enter new password and submit
        Then the password is successfully reset

    @TC_99114
    Scenario: Password reset with invalid details
        Given I am on the password reset page
        When I enter email address & click send link without captcha validation
        Then the ha validation error is displayed and the mail not received

    @TC_99109
    Scenario: User login with a newly reset password
        Given My password is reset
        And I enter a valid email and a newly reset password and click login
        Then The home page is displayed


