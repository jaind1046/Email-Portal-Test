Feature: User Configuration

	Background: Login
		Given I am logged in as required tenant
		And I am on the users screen

	@TC_99162
	Scenario: Add a new user with a valid email
		When I add a new user with a valid email address
		Then The new user record is saved with a tick icon

	Scenario: Edit a user record
		When I update a user record with a new group
		Then The updated record is saved

	@TC_b99162
	Scenario: Add a new user with a invalid email
		When I add a new user with a non existing email address
		Then the record is saved with a warning icon
		
	Scenario: Add a duplicate user
		When I add a new user with a duplicate email address
		Then the validation error is displayed

	@TC_99189
	Scenario: Delete a non admin user
		When I click the delete user button next to a non admin user and save
		Then The user record no longer exist
