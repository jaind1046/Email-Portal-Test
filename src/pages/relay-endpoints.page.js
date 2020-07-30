const {
    I
} = inject();

module.exports = {


async getRelayEndpointTab() {
    return (`button[id='tab-l1-2']`);
},
async clickRelayEndpointTab() {
    const element = await this.getRelayEndpointTab();
    I.click(element);
},

/*
 * ImportRelayEndpoints
 * ***************************************************************
 */

async getImportRelayEndpointsElement() {
    return(`(//button[@id='importRelayEndpoints'])[1]`)[0];
},

async clickImportRelayEndpoints() {
    const element = await this.getImportRelayEndpointsElement();
    I.click(element);
},

/*
 * RelayEndpointInput
 * ***************************************************************
 */

async getRelayEndpointInputElement() {
    return(`(//input[@id='relayEndpointInput'])[1]`)[0];
},

async getRelayEndpointInput() {
    const element = await this.getRelayEndpointInputElement();
    return await I.grabAttributeFrom(element, jsonValue());
},

async setRelayEndpointInput(value) {
    const element = await this.getRelayEndpointInputElement();
    I.fillField(element, value);
},

/*
 * AddEndpointBtn
 * ***************************************************************
 */

async getAddEndpointBtnElement() {
    return (`section[id='tab-l1-2-content'] > header > div > button:nth-of-type(2)`);
},

async clickAddEndpointBtn() {
    const element = await this.getAddEndpointBtnElement();
    I.click(element);
},

/*
 * EndpointRow
 * ***************************************************************
 */

async getEndpointRowElement() {
    return (`tr[class*='relay-endpoint-row'] > td:nth-of-type(1) > input`);
},

async getEndpointRow() {
    const element = await this.getEndpointRowElement();
    return await I.grabAttributeFrom(element, jsonValue());
},

async setEndpointRow(value) {
    const element = await this.getEndpointRowElement();
    I.fillField(element, value);
},

/*
 * RelayEndpoint0
 * ***************************************************************
 */

async getRelayEndpoint0Element() {
    return (`input[id='relayEndpoint_0']`);
},

async getRelayEndpoint0() {
    const element = await this.getRelayEndpoint0Element();
    return await I.grabAttributeFrom(element, jsonValue());
},

async setRelayEndpoint0(value) {
    const element = await this.getRelayEndpoint0Element();
    I.fillField(element, value);
},

/*
 * Port0
 * ***************************************************************
 */

async getPort0Element() {
    return (`input[id='port_0']`);
},

async getPort0() {
    const element = await this.getPort0Element();
    return await I.grabAttributeFrom(element, jsonValue());
},

async setPort0(value) {
    const element = await this.getPort0Element();
    I.fillField(element, value);
},

/*
 * DeleteBtn
 * ***************************************************************
 */

async getDeleteBtnElement() {
    return (`tr[class*='relay-endpoint-row'] > td:nth-of-type(4) > button`);
},

async clickDeleteBtn() {
    const element = await this.getDeleteBtnElement();
    I.click(element);
},

/*
 * CancelSaveEndpointsBtn
 * ***************************************************************
 */

async getCancelSaveEndpointsBtnElement() {
    return (`button[id='cancelSaveRelayEndpointsButton']`);
},

async clickCancelSaveEndpointsBtn() {
    const element = await this.getCancelSaveEndpointsBtnElement();
    I.click(element);
},

/*
 * SaveRelayEndpointsBtn
 * ***************************************************************
 */

async getSaveRelayEndpointsBtnElement() {
    return (`button[id='saveRelayEndpointsButton']`);
},

async clickSaveRelayEndpointsBtn() {
    const element = await this.getSaveRelayEndpointsBtnElement();
    I.click(element);
}


}