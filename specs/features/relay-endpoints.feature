@relayEndpoint
Feature: Relay Endpoints Admin

    Feature Description

    Background: Relay Endpoints page
        Given I am on the Relay Endpoint Configuration page

    Scenario: Add a Relay Endpoint
        When I add a valid Relay Endpoint with the port number and save
        Then The Relay Endpoint entry is saved

    Scenario: Add a Relay Endpoint without a port number
        When I enter a Relay Endpoint without a port and save
        Then The Relay Endpoint is not saved and the error is displayed as: Relay Endpoint could not be saved

    Scenario: Delete a Relay Endpoint
        When I click delete a existing Endpoint entry and save changes
        Then The Endpoint record is deleted

    Scenario: Edit a Relay Endpoint
        When I update a current Endpoint with a valid one and save
        Then The Endpoint is saved

    Scenario: Upload a Relay Endpoint csv file
        Given I click on the Import icon
        When I select a csv file containing 1 or more valid Relay Endpoints
        Then the endpoint records are added and validated and the success notification is displayed
    
    Scenario: Edit Relay Endpoint Port
        When I edit the port number on a new or existing Relay Endpoint and save
        Then the new port number is saved