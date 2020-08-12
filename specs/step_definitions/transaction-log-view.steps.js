///<reference path="./steps.d.ts" />
var assert = require('assert')

const {
    I,
    homePage,
    systemSettingsPage,
    env
} = inject();

const tenant = env.qa.tenantName

Given('I am logged into the portal as a multi account tenant', () => {
    I.loginAs(env.qa.email, env.qa.password);
    I.wait(5)
});

When('', () => {
    
});

Then('', () => {
    
});