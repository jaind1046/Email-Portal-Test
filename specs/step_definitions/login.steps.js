///<reference path="./steps.d.ts" />
const {
    I
} = inject();

Given('I am on the login page', () => I.amOnPage('/'));

When('I provide my user credentials via the login form', () => {
    I.login();
});

Then('I should successfully access home page', () => {
    I.seeElement('#mainMenu');
    
});