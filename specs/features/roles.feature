Feature: User Roles Admin

    Background:
        Given I am logged in as required tenant
        Given I am on the users role page

    @addRole
    Scenario: Add a new role

        When I add a new role with required settings
        Then The new role is saved with the selected permission and appears in the roles column

    @delrole
    Scenario: Delete a role

        When I select and delete a pre-existing role
        Then the role is deleted

    @editrole
    Scenario: Edit a role

        When I select and edit a pre-existing role
        Then The new role is saved with the selected permission and appears in the roles column

