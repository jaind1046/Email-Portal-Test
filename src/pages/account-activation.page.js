const {
    I
} = inject();

module.exports = {

    
    //Locators

    fields: {
        email: `input[id='Email']`,
        captcha: `textarea[id='g-recaptcha-response']`,
    },
    buttons: {
        accountActivationCancel: `button[id='accountActivationCancelButton']`,
        send: `button[class*='send-button']`,
    },


    //Methods

    /*
     * EmailAddress
     * ***************************************************************
     */
    setEmailAddress(value) {
        const element = locate(this.fields.email);
        I.fillField(element, value);
    },

    /*
     * Grecaptcharesponse
     * ***************************************************************
     */
    async getGrecaptcharesponse() {
        const element = locate(this.fields.captcha);
        return await I.grabAttributeFrom(element, jsonValue());
    },
    setGrecaptcharesponse(value) {
        const element = locate(this.fields.captcha);
        I.fillField(element, value);
    },

    /*
     * AccountActivationCancelBtn
     * ***************************************************************
     */
    clickAccountActivationCancelBtn() {
        const element = locate(this.buttons.fieldsaccountActivationCancel);
        I.click(element);
    },

    /*
     * SendLink
     * ***************************************************************
     */
    clickSendLink() {
        const element = locate(this.buttons.send);
        I.click(element);
    },

}