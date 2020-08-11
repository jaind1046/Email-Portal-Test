const {
    I,
    usersPage
} = inject();

module.exports = {

    //Locators   

    fields: {
        rolesPane: `div[class*='content-left-list-popup']`,
        displayNameInput: `input[id='displayNameInput']`,
    },
    buttons: {
        rolesTab: `#tab-l1-3`,
        addRole: `header[class*='list-content-left-header'] > div:nth-of-type(2) > button:nth-of-type(2)`,
        roleDeleteIcon: `//button[@class='list-item-delete-button tooltip-title']`,
        cancelRoleEdit: `button[id='cancelRoleEdit']`,
        saveRole: `button[id='saveRoleButton']`,
        deleteRoleConfirmCancel: `button[id='deleteRoleConfirmCancel']`,
        deleteRoleConfirmSave: `button[id='deleteRoleConfirmSave']`,
    },
    checkboxes: {
        approveFileReleaseToggle: `label[for='permission-toggle-860350d4-4dd8-499a-a56b-939c2cf28246']`,
        requestFileRelease: `label[for='permission-toggle-4a180aad-5ae6-47bc-8f97-e0dff3f5dbb5']`,
        viewSystemConfiguration: `label[for='permission-toggle-26a8129e-c533-4d09-b961-465c8a8b35de']`,
        editSystemConfiguration: `label[for='permission-toggle-e30cceb0-e9b2-4a80-9605-a162ca94932e']`,
        accountAdministration: `label[for='permission-toggle-7e9e3950-1e11-4aa1-bc7c-b4195ce648d1']`,
        viewInboundPolicyCatalogue: `label[for='permission-toggle-fdcb64d9-5519-4e42-8efa-32574ac2f4b9']`,
        editInboundPolicyCatalogue: `label[for='permission-toggle-113c6f31-5098-435d-b905-336851ee9e48']`,
        requestPublishOfInboundPolicyCatalogue: `label[for='permission-toggle-b5378b0c-3796-42e5-a6a7-a424e55f8bcc']`
    },


    //Methods


    /*
     * RolesTab
     * ***************************************************************
     */
    async clickRolesTab() {
        const element = this.buttons.rolesTab;
        I.click(element);
    },

    /*
     * AddingRoles
     * ***************************************************************
     */
    async clickAddBtn() {
        const element = this.buttons.addRole;
        I.click(element);
    },

    async getAvailableRoles() {
        const element = this.fields.rolesPane;
        return await locate(element).find('li');
    },

    async isRoleLinkDisplayed(role) {
        return I.seeElement("//button[contains(., '" + role + "')]")[0];
    },

    async selectRole(role) {
        const element = "//button[contains(., '" + role + "')]"
        I.click(element)[0]
    },

    async clickDelete() {
        const element = this.buttons.roleDeleteIcon;
        I.click(element)[0];
    },

    async clickRole(role) {
        const element = this.getRoleElement(role);
        I.click(element);
    },

    async getRoleDisplayName() {
        const element = this.fields.displayNameInput;
        return await I.grabValueFrom(element);
    },
    async setRoleDisplayName(value) {
        const element = this.fields.displayNameInput;
        I.fillField(element, value);
    },

    async clickSaveRoleButton() {
        const element = this.buttons.saveRole;
        I.click(element);
    },


    /*
     * Cancel & Deleting Role
     * ***************************************************************
     */
    async clickCancelRoleEdit() {
        const element = this.buttons.cancelRoleEdit;
        I.click(element);
    },

    async clickDeleteRoleConfirmCancel() {
        const element = this.buttons.deleteRoleConfirmCancel;
        I.click(element);
    },

    async clickDeleteRoleConfirmSave() {
        const element = this.buttons.deleteRoleConfirmSave
        I.click(element);
    },

    /*
     * Role Permissions
     * ***************************************************************
     */
    async clickApproveFileReleaseToggle() {
        const element = this.checkbox.approveFileReleaseToggle;
        I.click(element);
    },

    async getViewSystemConfiguration() {
        const element = this.checkbox.viewSystemConfiguration;
        return await I.grabAttributeFrom(el => el.textContent, element);
    },

    async clickViewSystemConfiguration() {
        const element = this.checkbox.viewSystemConfiguration;
        I.click(element);
    },



}