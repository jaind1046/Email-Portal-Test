@roles
Feature: User Roles Admin

    Background:
        Given I am logged in as required tenant
        And I am on the users role page
        
    @addRole
    Scenario: Add a new role

        When I add a new role with required settings
        Then The new role is saved and appears in the roles column

    @editrole
    Scenario: Edit a role

        When I select and edit a pre-existing role
        Then The role is updated with the selected permission
        
    @delrole
    Scenario: Delete a role

        When I select and delete a pre-existing role
        Then the role is deleted