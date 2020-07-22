const {
    I
} = inject();

module.exports = {


/*
 * Copy
 * ***************************************************************
 */

async getCopyElement() {
    return (`div[id='settingsFormElements'] > div:nth-of-type(1) > div > button`);
},

async clickCopy() {
    const element = await this.getCopyElement();
    I.click(element);
},

/*
 * TenantId
 * ***************************************************************
 */
async getTenantElement() {
    return (`#settingsFormElements > div.settings-list-container.single-item > div > span`);
},

async isTenantIdAccurate(id) {
    const element = await this.getTenantElement();
    I.see(id,element);
},

async setElement096F6Cfea83548E9Be(onOrOff) {
    const val = await this.getElement096F6Cfea83548E9Be();
    if ((onOrOff && !val) || (!onOrOff && val)) {
        const element = await this.getElement096F6Cfea83548E9BeElement();
        I.click(element);
    }
},


/*
 * MaximumFileSizeInMegabyte
 * ***************************************************************
 */

async getMaximumFileSizeInMegabyteElement() {
    return (`input[name='maximumFileSizeInMegabytesInput']`);
},

async getMaximumFileSizeInMegabyte() {
    const element = await this.getMaximumFileSizeInMegabyteElement();
    return await I.grabAttributeFrom(element, jsonValue());
},

async setMaximumFileSizeInMegabyte(value) {
    const element = await this.getMaximumFileSizeInMegabyteElement();
    I.fillField(element, value);
},

/*
 * Bf528Eeb01B647D8A555Bd21C
 * ***************************************************************
 */

async getBf528Eeb01B647D8A555Bd21CElement() {
    return (`input[id='bf528eeb-01b6-47d8-a555-bd21c88f646b']`);
},

async getBf528Eeb01B647D8A555Bd21C() {
    const element = this.getBf528Eeb01B647D8A555Bd21CElement();
    return await (await element.getProperty('checked')).jsonValue();
},

async setBf528Eeb01B647D8A555Bd21C(onOrOff) {
    const val = await this.getBf528Eeb01B647D8A555Bd21C();
    if ((onOrOff && !val) || (!onOrOff && val)) {
        const element = await this.getBf528Eeb01B647D8A555Bd21CElement();
        I.click(element);
    }
},

/*
 * HeldDuration
 * ***************************************************************
 */

async getHeldDurationElement() {
    return (`input[name='heldDuration']`);
},

async getHeldDuration() {
    const element = await this.getHeldDurationElement();
    return await I.grabAttributeFrom(element, jsonValue());
},

async setHeldDuration(value) {
    const element = await this.getHeldDurationElement();
    I.fillField(element, value);
},

/*
 * SuccessDuration
 * ***************************************************************
 */

async getSuccessDurationElement() {
    return (`input[name='successDuration']`);
},

async getSuccessDuration() {
    const element = await this.getSuccessDurationElement();
    return await I.grabAttributeFrom(element, jsonValue());
},

async setSuccessDuration(value) {
    const element = await this.getSuccessDurationElement();
    I.fillField(element, value);
}
,
/*
 * AnalysisOnlyMode
 * ***************************************************************
 */

async getAnalysisOnlyModeElement() {
    return (`div[class*='settings-list-outer'] > section:nth-of-type(2) > div > label:nth-of-type(1)`);
},

async getAnalysisOnlyMode() {
    const element = await this.getAnalysisOnlyModeElement();
    return await this.page.evaluate(el => el.textContent, element);
},

/*
 * InsertTransactionIdIntoMH
 * ***************************************************************
 */

async getInsertTransactionIdIntoMHElement() {
    return (`div[class*='settings-list-outer'] > section:nth-of-type(1) > div:nth-of-type(1) > label:nth-of-type(1)`);
},

async getInsertTransactionIdIntoMH() {
    const element = await this.getInsertTransactionIdIntoMHElement();
    return await this.page.evaluate(el => el.textContent, element);
}


}