const {
    I
} = inject();

module.exports = {

    //Locators   

    fields: {
        tenantIdBox: `#settingsFormElements > div.settings-list-container.single-item > div > span`,
        maximumFileSizeInMegabytesInput: `input[name='maximumFileSizeInMegabytesInput']`,
        heldDurationInput: `input[name='heldDuration']`,
        successDurationInput: `input[name='successDuration']`
    },
    buttons: {
        systemSettingsTab: `button[id='tab-l1-3']`,
        copy: `div[id='settingsFormElements'] > div:nth-of-type(1) > div > button`,
    },
    checkboxes: {
        insertTransactionIDIntoMailHeadersToggle: `label[for='58223b4c-9b20-475c-89d4-9512312f3a31']`,
        analysisOnlyModeToggle: `label[for='e00b29a6-f339-4b91-9e61-ee03bf2b104b']`
    },


    //Methods
    
    goToSettings() {
        const element = this.buttons.systemSettingsTab;
        I.click(element);
    },

    /*
     * TenantId
     * ***************************************************************
     */
    clickCopy() {
        const element = this.buttons.copy;
        I.click(element);
    },

    isTenantIdAccurate(id) {
        const element = this.fields.tenantIdBox;
        I.see(id, element);
    },

    /*
     * MaximumFileSizeInMegabyte
     * ***************************************************************
     */
    async getMaximumFileSizeInMegabyte() {
        const element = this.fields.maximumFileSizeInMegabytesInput;
        return await I.grabAttributeFrom(element, jsonValue());
    },

    setMaximumFileSizeInMegabyte(value) {
        const element = this.fields.maximumFileSizeInMegabytesInput;
        I.fillField(element, value);
    },

    /*
     * InsertTransactionIdIntoMH
     * ***************************************************************
     */
    async isInsertTransactionHeaderChecked() {
        const element = this.checkboxes.insertTransactionIDIntoMailHeadersToggle;
        return await (await element.getProperty('checked')).jsonValue();
    },

    setInsertTransactionHeader(on) {
        const val = this.checkboxes.insertTransactionIDIntoMailHeadersToggle;
        if (!on && val) {
            const element = this.checkboxes.insertTransactionIDIntoMailHeadersToggle;
            I.click(element);
        }
    },

    setInsertTransactionHeader(Off) {
        const val = this.checkboxes.insertTransactionIDIntoMailHeadersToggle;
        if (!off && val) {
            const element = this.checkboxes.insertTransactionIDIntoMailHeadersToggle;
            I.click(element);
        }
    },

    /*
     * HeldDuration
     * ***************************************************************
     */
    async getHeldDuration() {
        const element = this.fields.heldDurationInput;
        return await I.grabAttributeFrom(element, jsonValue());
    },

    setHeldDuration(value) {
        const element = this.fields.heldDurationInput;
        I.fillField(element, value);
    },

    /*
     * SuccessDuration
     * ***************************************************************
     */
    async getSuccessDuration() {
        const element = this.fields.successDurationInput;
        return await I.grabAttributeFrom(element, jsonValue());
    },

    setSuccessDuration(value) {
        const element = this.fields.successDurationInput;
        I.fillField(element, value);
    },
    /*
     * AnalysisOnlyMode
     * ***************************************************************
     */
    async isInsertTransactionHeaderChecked() {
        const element = this.checkboxes.analysisOnlyModeToggle;
        return await (await element.getProperty('checked')).jsonValue();
    },

    setInsertTransactionHeader(on) {
        const val = this.checkboxes.analysisOnlyModeToggle;
        if (!on && val) {
            const element = this.checkboxes.analysisOnlyModeToggle;
            I.click(element);
        }
    },

    setInsertTransactionHeader(Off) {
        const val = this.checkboxes.analysisOnlyModeToggle;
        if (!off && val) {
            const element = this.checkboxes.analysisOnlyModeToggle;
            I.click(element);
        }
    },
}