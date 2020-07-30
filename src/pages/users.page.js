const {I} = inject();

module.exports = {

    usersTab: `button[id='tab-l1-1']`,
    newUserRow: '#usersTable2 > tbody > tr.user-dirty.user-row.new-user-row.new-unsaved-line',
    newUserNameField:`#usersTable2 > tbody > tr.user-dirty.user-row.new-user-row.new-unsaved-line > td:nth-child(1)`,
    newUserEmailField: `//tr[contains(@class,'user-dirty')]/td[2]/input`,
    newUserGrpDropDown: `#usersTable2 > tbody > tr.user-dirty.user-row.new-user-row.new-unsaved-line > td:nth-child(3) > span`,
   
    
    async clickUsersTab() {
        const element = await this.usersTab;
         I.click(element);
    },

    async getNewUserRowNameInput() {
        return await this.getUserRecord(1)
}, 
    
    async setNewUserName(userName) {
        const element =  locate(this.newUserNameField);
        I.fillField(element,userName);
    },

    async getNewUserRowEmailInput() {
      // const element = await this.getUserRecord(1)
       return await this.getUserRecord(2)
  }, 
    async setNewUserEmail(userEmail) {
        const element = locate(this.newUserEmailField);
        I.fillField(element, userEmail);
    },

    async getNewUserGroupDropDown() {
    //    const element = locate(`#usersTable2 > tbody > tr.user-dirty.user-row.new-user-row.new-unsaved-line > td:nth-child(3) > span`)
    //    return element;
    },
    async selectNewUserGroup(userGroup) {
        const element = locate(this.newUserGrpDropDown);
        I.click(element)
        I.click("//li[contains(., '" +userGroup+ "')]");
    },
//  //tr[contains(@class,'user-dirty')]/td[3] 

  async getUserRecord(n) {
      const element = null;
   var rows = locate(`//*[@id="usersTable2"]/tbody/tr`);
    for (let i in rows) {
        const text = I.grabTextFrom(rows[i] + "/td[" + n + "]/input")
       if(text===""){
           element = rows[i] + "/td[" + n + "]/input"
   }    
}
return element;
},        
    /*
     * AddUserBtn
     * ***************************************************************
     */
    async getAddUserBtn() {
        return `section[id='tab-l1-1-content'] > header > div > button`;
    },
    async clickAddUserBtn() {
        const element = await this.getAddUserBtn();
        I.click(element);
    },

    /*
     * DeleteBtn
     * ***************************************************************
     */
    async getDeleteBtnElement() {
        return (`button[class*='action-button']`);
    },
    async clickDeleteBtn() {
        const element = await this.getDeleteBtnElement();
        I.click(element);
    },

    /*
     * CancelSaveUsersButton
     * ***************************************************************
     */
    async getCancelSaveUsersButtonElement() {
        return (`button[id='cancelSaveUsersButton']`);
    },
    async clickCancelSaveUsersButton() {
        const element = await this.getCancelSaveUsersButtonElement();
        I.click(element);
    },

    /*
     * SaveUsersButton
     * ***************************************************************
     */
    async getSaveUsersButtonElement() {
        return (`button[id='saveUsersButton']`);
    },
    async clickSaveUsersButton() {
        const element = await this.getSaveUsersButtonElement();
        I.click(element);
    },







}