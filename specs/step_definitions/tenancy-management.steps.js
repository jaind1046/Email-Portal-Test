///<reference path="./steps.d.ts" />
var assert = require('assert')

const {
    I,
    homePage,
    systemSettingsPage,env
} = inject();

const tenant = env.qa.tenantName

Given('I am logged into the portal as a multi account tenant', () => {
    I.login();
    I.wait(5);
});

When('I select a different tenant in the top right of the portal screen', () => {
    I.selectTenant(tenant)
});

Then('The selected tenant is successfully set', () => {
    const id = env.qa.tenantId;
    homePage.clickConfiguration();
    systemSettingsPage.goToSettings();
    systemSettingsPage.isTenantIdAccurate(id)

});