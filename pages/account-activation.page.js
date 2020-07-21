
const {I} = inject();

module.exports = {
        
/*
 * EmailAddress
 * ***************************************************************
 */
async getEmailAddressElement() {
    return (`input[id='Email']`);
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
 * AccountActivationCancelBtn
 * ***************************************************************
 */
async getAccountActivationCancelBtnElement() {
    return (`button[id='accountActivationCancelButton']`);
},

async clickAccountActivationCancelBtn() {
    const element = await this.getAccountActivationCancelBtnElement();
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