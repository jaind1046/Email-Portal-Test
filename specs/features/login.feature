Feature: Successful Login
    As a user
    I want to be able to login to the portal

  @login
  Scenario: Login with valid credentials
    Given I am on the login page
    When I provide my user credentials via the login form
    Then I should successfully access home page