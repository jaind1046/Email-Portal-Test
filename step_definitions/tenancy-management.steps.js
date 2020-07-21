///<reference path="./steps.d.ts" />
var assert = require('assert')
const {
    I,
    homePage,
    systemSettingsPage
} = inject();

const tenant = "Nadege Tenant 5"

Given('I am logged into the portal as a multi account tenant', () => {
    I.login();
    //pause()
});

When('I select a different tenant in the top right of the portal screen', () => {
    I.selectTenant(tenant)
});

Then('The selected tenant is successfully set', () => {
    const id = "425fa0c0-2e59-459c-8568-9936832c3b95";
    homePage.goToSettings();
    systemSettingsPage.isTenantIdAccurate(id)

});