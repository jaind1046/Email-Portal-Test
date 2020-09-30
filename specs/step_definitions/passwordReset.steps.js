///<reference path="./steps.d.ts" />
const {
    I,passwordResetPage
} = inject();

var currentPassword             = env.qa.password
var newPassword                 = env.qa.newPassword
var confirmPassword             = env.qa.confirmPassword
var wakPassword                 = env.qa.weakPassword
var invalidPassword             = env.qa.invalidPassword
var invalidconfirmPassword      = env.qa.invalidVonfirmPassword
const passwordsDontMatch        = "Password confirmation does not match password"
const passwordWeak              = "Passwords must be at least 8 characters and contain at least one of each of the following: upper case"
// Could not find this on the page
const passwordWrong             = ""

Given('I am logged into the portal and clicked on Change Password', () => {
    I.loginAs(env.qa.email, env.qa.password);
    I.wait(5);
    I.goToPasswordResetPage();
});

When('I enter my current password and new password and Click Save', () => {
    passwordResetPage.setCurrentPassword(currentPassword);
    passwordResetPage.setNewPassword(newPassword);
    passwordResetPage.setConfirmPassword(confirmPassword);
    clickSave.clickSave();
});

When('I click Forgotten Password', () => {
    I.goToPasswordResetPage();
});

When('I enter the correct password', () => {
    passwordResetPage.setCurrentPassword(currentPassword);
});

When('I enter the valid new password', () => {
    passwordResetPage.setNewPassword(newPassword);
});

When('I enter the valid confirm password', () => {
    passwordResetPage.setConfirmPassword(confirmPassword);
});

When('I enter a weak new password', () => {
    passwordResetPage.setNewPassword(weakPassword);
    passwordResetPage.setConfirmPassword(weakPassword);
});

When('I enter a different confirm password', () => {
    passwordResetPage.setNewPassword(newPassword);
    passwordResetPage.setConfirmPassword(invalidconfirmPassword);
});


When('I click save', () => {
    passwordResetPage.clickSave();
});


Then('The password is reset successfully', () => {
    I.seeElement(`div[class*='passwordChangeWrapper']`);
    I.dontSeeElement(`button[id='submitPasswordChange']`);
});

Then('I see a weak password error', () => {
    I.see(passwordWeak);
});

Then('I see a passwords dont match error', () => {
    I.see(passwordsDontMatch);
});

Then('I see a wrong password error', () => {
    I.see(passwordWrong);
});

Then('I see weak password and passwords dont match error', () => {
    I.see(passwordWeak);
    I.see(passwordsDontMatch);
});

Then('The password reset page is displayed', () => {
    I.seeElement(`div[class*='login-container']`);
});
