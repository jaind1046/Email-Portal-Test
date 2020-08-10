Feature: Password reset


    @TC_99161
    Scenario: Change Password in user admin
        Given I am logged into the portal and clicked on Change Password
        When I enter my current password and new password and Click Save
        Then a success notification is displayed

    @TC_108027
    Scenario: Go to password reset page
        Given I am on the login page
        When I click Forgotten Password
        Then The password reset page is displayed


    @TC_99113
    Scenario: Successful password reset
        Given I click Forgotten Password, enter details and click send link with the captcha validation 
        When I open the mail and click the password reset link and enter new password and submit
        Then the password is successfully reset

    @TC_99114
    Scenario: Password reset with invalid details
        Given I am on the password reset page
        When I enter email address & click send link without captcha validation
        Then the validation error is displayed and the mail not received

    @TC_99109
    Scenario: User login with a newly reset password
        Given My password is reset
        And I enter a valid email and a newly reset password and click login
        Then The home page is displayed


