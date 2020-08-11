const {
    I
} = inject();

module.exports = {

    //locators
    fields: {
        policyOptionNameInput: `input[class*='policyOptionNameInput']`,
        customGroupName: `input[class*='custom-group-name']`,
        fileTypesuffix: `input[placeholder="Enter a file type suffix here then hit 'enter' to add it to the list"]`,
        fileMimeType: `input[placeholder="Enter a mime type here then hit 'enter' to add it to the list"]`,
    },
    buttons: {
        addNewContentManagementPolicy: `button[id='addNewContentManagementPolicyButton']`,
        addPolicyCustomGroup: `button[id='addPolicyCustomGroup']`,
        customActionDisallow: `label[for='customActionDisallow']`,
        customActionAllow: `label[for='customActionAllow']`,
        deleteCMP: `button[id='deleteCMPButton']`,
        cancelCMP: `button[id='cancelCMPButton']`,
        saveCMP: `button[id='saveCMPButton']`,
        deleteContentManagementPolicyConfirmCancel: `button[id='deleteContentManagementPolicyConfirmCancel']`,
        deleteContentManagementPolicyConfirmSave: `button[id='deleteContentManagementPolicyConfirmSave']`,
        defaultMediaTypePolicyAllow: `label[for='DefaultMediaTypePolicy_Allow']`,
        defaultMediaTypePolicyHold: `label[for='DefaultMediaTypePolicy_Hold']`,
        supportedActionExcelAllow: `label[for='supportedActionAllow0']`,
        supportedActionExcelHold: `label[for='supportedActionDisllow0']`,
        supportedActionExcelInspect: `label[for='supportedActionInspect0']`,
        supportedActionImageAllow: `label[for='supportedActionAllow1']`,
        supportedActionImageHold: `label[for='supportedActionDisllow1']`,
        supportedActionImageInspect: `label[for='supportedActionInspect1']`,
        supportedActionPdfAllow: `label[for='supportedActionAllow2']`,
        supportedActionPdfHold: `label[for='supportedActionDisllow2']`,
        supportedActionPdfInspect: `label[for='supportedActionInspect2']`,
        supportedActionPowerPointAllow: `label[for='supportedActionAllow3']`,
        supportedActionPowerPointHold: `label[for='supportedActionDisllow3']`,
        supportedActionPowerPointInspect: `label[for='supportedActionInspect3']`,
        supportedActionWordAllow: `label[for='supportedActionAllow4']`,
        supportedActionWordHold: `label[for='supportedActionDisllow4']`,
        supportedActionWordInspect: `label[for='supportedActionInspect4']`,
        deleteCustomGroup: `button[class*='delete-custom-group-row']`,
        DynamicDataExchange_Allow: `label[for='WordContentManagement_DynamicDataExchange_Allow']`
    },
    containers: {
        wordContentFlags: `#contentFlagsContainer > div > div:nth-child(1)`,
        excelContentFlags: `#contentFlagsContainer > div > div:nth-child(3)`,
        powerPointContentFlags: `#contentFlagsContainer > div > div:nth-child(5)`,
        pdfContentFlags: `#contentFlagsContainer > div > div:nth-child(7)`,
    },


    //Methods

    /*
     * AddNewContentManagementPolicy
     * ***************************************************************
     */
    clickAddNewContentManagementPolicy() {
        const element = this.buttons.addNewContentManagementPolicy;
        I.click(element);
    },

    setPolicyName(value) {
        const element = this.fields.policyOptionNameInput;
        I.fillField(element, value);
    },

    /*
     * AddPolicyCustomGroup
     * ***************************************************************
     */
    clickAddPolicyCustomGroup() {
        const element = this.buttons.addPolicyCustomGroup;
        I.click(element);
    },

    setCustomGroupName(value) {
        const element = this.fields.customGroupName;
        I.fillField(element, value);
    },

    setCustomGroupFileType(value) {
        const element = this.fields.fileTypesuffix;
        I.fillField(element, value);
        I.pressKey("Enter")
    },

    setCustomGroupMimeType(value) {
        const element = this.fields.fileMimeType;
        I.fillField(element, value);
        I.pressKey("Enter")
    },

    setCustomGroupToAllow() {
        const element = this.buttons.customActionAllow;
        I.click(element);
    },

    setCustomGroupToHold() {
        const element = this.buttons.customActionDisallow;
        I.click(element);
    },

    /*
     * DefaultMediaType
     * ***************************************************************
     */
    getDefaultMediaPolicyFlag(flag) {
        return "label[for='DefaultMediaTypePolicy_'" + flag + "']";
    },

    setDefaultMediaPolicyFlag(flag) {
        const element = this.getDefaultMediaPolicyFlag(flag);
        I.click(element);
    },

    /*
     * Supportted Group Actions
     * ***************************************************************
     */
    setImagesSupportedGroupToAllow() {
        const element = this.buttons.supportedActionImageAllow;
        I.click(element);
    },

    setImagesSupportedGroupToHold() {
        const element = this.buttons.supportedActionImageHold;
        I.click(element);
    },

    setImagesSupportedGroupToInspect() {
        const element = this.buttons.supportedActionImageInspect;
        I.click(element);
    },

    setExcelSupportedGroupToAllow() {
        const element = this.buttons.supportedActionExcelAllow;
        I.click(element);
    },

    setExcelSupportedGroupToHold() {
        const element = this.buttons.supportedActionExcelHold;
        I.click(element);
    },

    setExcelSupportedGroupToInspect() {
        const element = this.buttons.supportedActionExcelInspect;
        I.click(element);
    },

    setPdfSupportedGroupToAllow() {
        const element = this.buttons.supportedActionPdfAllow;
        I.click(element);
    },

    setPdfSupportedGroupToHold() {
        const element = this.buttons.supportedActionPdfHold;
        I.click(element);
    },

    setPdfSupportedGroupToInspect() {
        const element = this.buttons.supportedActionPdfInspect;
        I.click(element);
    },

    setPowerPointSupportedGroupToAllow() {
        const element = this.buttons.supportedActionPowerPointAllow;
        I.click(element);
    },

    setPowerPointSupportedGroupToHold() {
        const element = this.buttons.supportedActionPowerPointHold;
        I.click(element);
    },

    setPowerPointSupportedGroupToInspect() {
        const element = this.buttons.supportedActionPowerPointInspect;
        I.click(element);
    },

    setWordSupportedGroupToAllow() {
        const element = this.buttons.supportedActionWordAllow;
        I.click(element);
    },

    setWordSupportedGroupToHold() {
        const element = this.buttons.supportedActionWordHold;
        I.click(element);
    },

    setWordSupportedGroupToInspect() {
        const element = this.buttons.supportedActionWordInspect;
        I.click(element);
    },

    /*
     * ContentFlag
     * ***************************************************************
     */
    getContentFlagRule(type, rule) {
        return "label[for='" + type + "ContentManagement_" + rule + "']";
    },

    setContentFlagRule(type, rule) {
        const container = null;
        if (type == 'Word') {
            container = this.containers.wordContentFlags;
        } else if (type == 'Excel') {
            container = this.containers.excelContentFlags;
        } else if (type == 'PowerPoint') {
            container = this.containers.powerPointContentFlags;
        } else if (type == 'Pdf') {
            container = this.containers.pdfContentFlags;
        }
        I.click(container);
        const element = this.getContentFlagRule(type, rule);
        I.click(element);
    },

    /*
     * DeleteCustomGroup
     * ***************************************************************
     */
    clickDeleteCustomGroup() {
        const element = this.buttons.deleteCustomGroup;
        I.click(element);
    },

    /*
     * DeleteCmp
     * ***************************************************************
     */
    clickDeleteCmpButton() {
        const element = this.buttons.deleteCMP;
        I.click(element);
    },

    clickDeleteCmpConfirmCancel() {
        const element = this.buttons.deleteContentManagementPolicyConfirmCancel;
        I.click(element);
    },

    clickDeleteCmpConfirmSave() {
        const element = this.buttons.deleteContentManagementPolicyConfirmSave;
        I.click(element);
    },

    /*
     * CancelCmpButton
     * ***************************************************************
     */
    clickCancelCmpButton() {
        const element = this.buttons.cancelCMP;
        I.click(element);
    },
    /*
     * SaveCmpButton
     * ***************************************************************
     */
    clickSaveCmpButton() {
        const element = this.buttons.saveCMP;
        I.click(element);
    },

}