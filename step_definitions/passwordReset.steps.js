///<reference path="./steps.d.ts" />
const {
    I
} = inject();

Given('I am on the login page', () => I.amOnPage('/'));

When('I click Forgotten Password', () => {
    I.goToPasswordResetPage();
});

Then('The password reset page is displayed', () => {
    I.seeElement(`div[class*='login-container']`);

});
