
@TenantSwitching
Feature: TenantSwitching

	@TC_103206
	Scenario: Valid Tenant switching
		Given I am logged into the portal as a multi account tenant
		When I select a different tenant in the top right of the portal screen
		Then The selected tenant is successfully set
	 


