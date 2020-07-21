const {I} = inject();

module.exports = {

passwordResetUrl: '/Authorisation/ForgotPassword',

fields: {

    forgotPasswordFields: '#forgotPasswordForm',
    captchaBox: '#rc-anchor-container > div.rc-anchor-content > div:nth-child(1) > div > div',
    email: '#mainContainer #Email',
    sendLink: '#forgotPasswordForm > div.button-container > button.log-in-button.send-button',
    cancel: 'forgotPasswordCancelButton'
},


sendResetRequest(emailAddress) {
    I.fillField(this.fields.email,emailAddress);
    I.click(this.fields.captchaBox);
    I.click(this.fields.sendLink);
},

sendResetLink() {
    I.click(this.fields.sendLink);

},

cancelReset() {
    I.click(this.fields.cancel);

},

/*
 * EmailAddress
 * ***************************************************************
 */

async getEmailAddressElement() {
    return (`input[id='Email']`);
},

async getEmailAddress() {
    const element = await this.getEmailAddressElement();
    return await I.grabAttributeFrom(element, jsonValue());
},

async setEmailAddress(value) {
    const element = await this.getEmailAddressElement();
    I.fillField(element, value);
},

/*
 * Grecaptcharesponse
 * ***************************************************************
 */

async getGrecaptcharesponseElement() {
    return (`textarea[id='g-recaptcha-response']`);
},

async getGrecaptcharesponse() {
    const element = await this.getGrecaptcharesponseElement();
    return await I.grabAttributeFrom(element, jsonValue());
},

async setGrecaptcharesponse(value) {
    const element = await this.getGrecaptcharesponseElement();
    I.fillField(element, value);
},

/*
 * ForgotPasswordCancelButto
 * ***************************************************************
 */

async getForgotPasswordCancelButtoElement() {
    return (`button[id='forgotPasswordCancelButton']`);
},

async clickForgotPasswordCancelButto() {
    const element = await this.getForgotPasswordCancelButtoElement();
    I.click(element);
},

/*
 * SendLink
 * ***************************************************************
 */

async getSendLinkElement() {
    return (`button[class*='send-button']`);
},

async clickSendLink() {
    const element = await this.getSendLinkElement();
    I.click(element);
},

/*
 * RequestVerificationToken
 * ***************************************************************
 */

async getRequestVerificationTokenElement() {
    return (`input[name='__RequestVerificationToken']`);
},

async getRequestVerificationToken() {
    const element = await this.getRequestVerificationTokenElement();
    return await I.grabAttributeFrom(element, jsonValue());
},

async setRequestVerificationToken(value) {
    const element = await this.getRequestVerificationTokenElement();
    I.fillField(element, value);
}

}


