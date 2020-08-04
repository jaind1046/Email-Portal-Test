@login
Feature: Successful Login
    As a user
    I want to be able to login to the portal


  @TC_99106
  Scenario: Login with valid credentials
    Given I am on the login page
    When I provide my user credentials via the login form
    Then I should successfully access home page

  @TC_99110
  Scenario: User login with invalid password
    Given I am on the login page
    When I enter valid username & invalid password
    Then The error shows Incorrect username or password, please try again is displayed

  @TC_99111
  Scenario: User login with expired password
    Given I am on the login page
    When I enter valid username & expired password
    Then The error shows Incorrect username or password, please try again is displayed
