@passwordReset
Feature: Password reset


    @TC_Reset_Password_99161
    Scenario: Change Password successfully
        Given I am logged into the portal and clicked on Change Password
        When I enter my current password and new password and Click Save
        Then The password is reset successfully

    @TC_Reset_Password_99162
    Scenario: Change Password with different confirmed password
        Given I am logged into the portal and clicked on Change Password
        When I enter the valid new password
        When I enter a different confirm password
        Then I see a passwords dont match error

    @TC_Reset_Password_99163
    Scenario: Change Password with weak password
        Given I am logged into the portal and clicked on Change Password
        When I enter the valid new password
        When I enter the valid confirm password
        When I enter a weak new password
        Then I see a weak password error

    @TC_Reset_Password_991634
    Scenario: Change Password with weak password and different confirm password
        Given I am logged into the portal and clicked on Change Password
        When I enter a weak new password
        When I enter the valid confirm password
        When I enter a different confirm password
        Then I see weak password and passwords dont match error