const {
    I
} = inject();

module.exports = {

    //Locators

    fields: {
        forgotPasswordFields        : '#forgotPasswordForm',
        captchaBox                  : '#rc-anchor-container > div.rc-anchor-content > div:nth-child(1) > div > div',
        recaptchaResponse           : `textarea[id='g-recaptcha-response']`,
        email                       : `input[id='Email']`,
        requestVerificationToken    : `input[name='__RequestVerificationToken']`,
        currentPassword             : `input[name='CurrentPassword']`,
        newPassword                 : `input[name='NewPassword']`,
        confirmNewPassword          : `input[name='ConfirmNewPassword']`
    },
    buttons: {
        sendLink                    : '#forgotPasswordForm > div.button-container > button.log-in-button.send-button',
        cancel                      : 'forgotPasswordCancelButton',
        save                        : 'id=submitPasswordChange'
    },


    /*
     * PasswordRequestSetting
     * ***************************************************************
     */
    setEmailAddress(value) {
        const element = this.fields.email;
        I.fillField(element, value);
    },
    setCurrentPassword(value) {
        const element = this.fields.currentPassword;
        I.fillField(element, value);
    },
    setNewPassword(value) {
        const element = this.fields.newPassword;
        I.fillField(element, value);
    },
    setConfirmPassword(value) {
        const element = this.fields.confirmNewPassword;
        I.fillField(element, value);
    },
    clickSave() {
        const element = this.buttons.save;
        I.click(element);
    },
   async getGrecaptcharesponse() {
        const element = this.fields.recaptchaResponse;
        return await I.grabAttributeFrom(element, jsonValue());
    },

    setGrecaptcharesponse(value) {
        const element = this.fields.recaptchaResponse;
        I.fillField(element, value);
    },

    clickForgotPasswordCancelButton() {
        const element = this.buttons.cancel;
        I.click(element);
    },

    clickSendLink() {
        const element = this.buttons.sendLink;
        I.click(element);
    },

    sendResetRequest(emailAddress) {
        I.fillField(this.fields.email, emailAddress);
        I.click(this.fields.captchaBox);
        I.click(this.fields.sendLink);
    },
    
    /*
     * RequestVerificationToken
     * ***************************************************************
     */
    async getRequestVerificationToken() {
        const element = this.fields.requestVerificationToken;
        return await I.grabAttributeFrom(element, jsonValue());
    },

    setRequestVerificationToken(value) {
        const element = this.fields.requestVerificationToken;
        I.fillField(element, value);
    }

}