const {
    I
} = inject();

module.exports = {

    //Locators   

    fields: {
        newUserNameField: `#usersTable2 > tbody > tr.user-dirty.user-row.new-user-row.new-unsaved-line > td:nth-child(1)`,
        newUserEmailField: `//tr[contains(@class,'user-dirty')]/td[2]/input`,
    },
    buttons: {
        usersTab: `button[id='tab-l1-1']`,
        addUser: `section[id='tab-l1-1-content'] > header > div > button`,
        deleteUser: `button[class*='action-button']`,
        cancelSaveUsers: `button[id='cancelSaveUsersButton']`,
        saveUsers: `button[id='saveUsersButton']`
    },
    table: {
        newUserRow: '#usersTable2 > tbody > tr.user-dirty.user-row.new-user-row.new-unsaved-line',
    },
    list: {
        newUserGrpDropDown: `#usersTable2 > tbody > tr.user-dirty.user-row.new-user-row.new-unsaved-line > td:nth-child(3) > span`,

    },


    //Methods

    async clickUsersTab() {
        const element = this.buttons.usersTab;
        I.click(element);
    },

    /*
     * AddingUser
     * ***************************************************************
     */
    async clickAddUserBtn() {
        const element = this.buttons.addUser;
        I.click(element);
    },

    async getNewUserRowNameInput() {
        return await this.getUserRecord(1)
    },

    async setNewUserName(userName) {
        const element = this.fields.newUserNameField;
        I.fillField(element, userName);
    },

    async getNewUserRowEmailInput() {
        return await this.getUserRecord(2)
    },
    async setNewUserEmail(userEmail) {
        const element = locate(this.fields.newUserEmailField);
        I.fillField(element, userEmail);
    },

    async selectNewUserGroup(userGroup) {
        const element = locate(this.lists.newUserGrpDropDown);
        I.click(element)
        I.click("//li[contains(., '" + userGroup + "')]");
    },

    async getUserRecord(n) {
        const element = null;
        var rows = locate(`//*[@id="usersTable2"]/tbody/tr`);
        for (let i in rows) {
            const text = I.grabTextFrom(rows[i] + "/td[" + n + "]/input")
            if (text === "") {
                element = rows[i] + "/td[" + n + "]/input"
            }
        }
        return element;
    },

    async clickSaveUsersButton() {
        const element = this.buttons.saveUsers;
        I.click(element);
    },

    /*
     * DeleteBtn
     * ***************************************************************
     */
    async clickDeleteBtn() {
        const element = this.buttons.deleteUser;
        I.click(element);
    },

    async clickCancelSaveUsersButton() {
        const element = this.buttons.cancelSaveUsers;
        I.click(element);
    },








}