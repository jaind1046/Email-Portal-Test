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
        saveUsers: `button[id='saveUsersButton']`,
        userModalSaveButton: `button[id='userModalSaveButton']`,
        cancelUserDeleteConfirm: `button[id='cancelUserDeleteConfirm']`,
        userDeleteModalClose: `button[id='userDeleteModalClose']`,
        nonValidatedUser: `td[class*='users-email-not-confirmed-cell unvalidated-domain tooltip-title']`,
        validatedUser: `td[class*='users-email-confirmed-cell validated-domain tooltip-title']`,
    },
    table: {
        newUserRow: '#usersTable2 > tbody > tr.user-dirty.user-row.new-user-row.new-unsaved-line',
    },
    list: {
        newUserGrpDropDown: `#usersTable2 > tbody > tr.user-dirty.user-row.new-user-row.new-unsaved-line > td:nth-child(3) > span`,
    },
    modal: {
        userDeleteModalContainer: `section[id='userDeleteModalContainer']`
    },



    //Methods

    clickUsersTab() {
        const element = this.buttons.usersTab;
        I.click(element);
    },

    /*
     * AddingUser
     * ***************************************************************
     */
    clickAddUserBtn() {
        const element = this.buttons.addUser;
        I.click(element);
    },

    async getNewUserRowNameInput() {
        return await this.getUserRecord(1)
    },

    setNewUserName(userName) {
        const element = this.fields.newUserNameField;
        I.fillField(element, userName);
    },

    async getNewUserRowEmailInput() {
        return await this.getUserRecord(2)
    },
    setNewUserEmail(userEmail) {
        const element = this.fields.newUserEmailField;
        I.fillField(element, userEmail);
    },

    openNewUserGroup() {
        const element = this.list.newUserGrpDropDown;
        I.click(element);
    },

    selectNewUserGroup(userGroup) {
        I.click("//li[contains(., '" + userGroup + "')]");
    },

    addUser(userName, userEmail, userGroup) {
        this.clickAddUserBtn();
        this.setNewUserName(userName);
        this.setNewUserEmail(userEmail);
        this.openNewUserGroup();
        this.selectNewUserGroup(userGroup);
        this.clickSaveUsersButton();
    },

    getUserRecord(n) {
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

    clickSaveUsersButton() {
        const element = this.buttons.saveUsers;
        I.click(element);
    },

   getUserRecord(userId) {
        return "//tr[contains(., '" + userId + "')]"
    },

  getNonValidatedUserIcon(userId) {
      const element = locate(this.getUserRecord(userId)).find(this.buttons.nonValidatedUser);
        return element;
  },

  getValidatedUserIcon(userId) {
      const element = locate(this.getUserRecord(userId)).find(this.buttons.validatedUser);
      return element;
  },


    /*
     * DeletingUser
     * ***************************************************************
     */
    clickDeleteBtn() {
        const element = this.buttons.deleteUser;
        I.click(element);
    },

   clickDeleteUserRecord(userId) {
        const element = locate(this.getUserRecord(userId)).find(this.buttons.deleteUser);
        I.click(element);
    },

    clickUserModalSaveButton() {
        within({frame: this.modal.userDeleteModalContainer}, () => {
        const element = this.buttons.userModalSaveButton;
        I.click(element);
    })
},
    clickCancelUserDeleteConfirm() {
        const element = this.buttons.cancelUserDeleteConfirm;
        I.click(element);
    },

    clickUserDeleteModalClose() {
        const element =  this.buttons.userDeleteModalClose;
        I.click(element);
    },

    clickCancelSaveUsersButton() {
        const element = this.buttons.cancelSaveUsers;
        I.click(element);
    },



}