const {
    I
} = inject();

module.exports = {

    //Locators   

    fields: {
        newGroupNameField: `input[class='group-input-display-name']`,
    },
    lists: {
        newRoleDropDown: `#userGroupsTable2 > tbody > tr.group-dirty.group-row.new-group-row.new-unsaved-line > td:nth-child(2) > select`,
        groups: `span[class*='select2-dropdown']`,
    },
    buttons: {
        groupsTab: `button[id='tab-l1-2']`,
        cancelSaveGroup: `button[id='cancelSaveGroupButton']`,
        saveGroup: `button[id='saveGroupButton']`,
        groupDelete: `tr[class*='group-id-511ffd70-0379-48c4-bad1-b84344f372f7'] > td:nth-of-type(4)`,
        groupUserCount: `tr[class*='group-id-511ffd70-0379-48c4-bad1-b84344f372f7'] > td:nth-of-type(4) > button`,
        addGroup: `section[id='tab-l1-2-content'] > header > div > button:nth-of-type(2)`,
    },
    table: {
        groupTableRecord: `#userGroupsTable2 > tbody > tr.group-has-users.existing-group.group-row.group-id-511ffd70-0379-48c4-bad1-b84344f372f7.even`,
        groupTable: `table[id='userGroupsTable2']`,
    },


    //Methods 

    /*
     * GroupsTab
     * ***************************************************************
     */
    async clickGroupsTab() {
        const element = this.buttons.groupsTab;
        I.click(element);
    },

    async getGroupListText() {
        const element = this.lists.groups;
        return await I.grabTextFrom(element);
    },

    async getGroupListValue() {
        const element = this.lists.groups;
        return await I.grabValueFrom(element)
    },

    async setGroupListByValue(value) {
        const element = this.lists.groups;
        I.selectOption(element, value)
    },

    /*
     * AddingSavingGroups
     * ***************************************************************
     */
    async clickCancelSaveGroupButton() {
        const element = this.buttons.cancelSaveGroup;
        I.click(element);
    },

    async clickSaveGroupButton() {
        const element = this.buttons.saveGroup;
        I.click(element);
    },

    async setNewGroupName(groupName) {
        const element = this.fields.newGroupNameField;
        I.fillField(element, groupName);
    },

    async selectNewUserGroup(role) {
        const element = locate(this.lists.newRoleDropDown);
        I.click(element)
        I.click("//li[contains(., '" + role + "')]");
    },

    async clickAddGroupButton() {
        const element = this.buttons.addGroup;
        I.click(element);
    },

    async clickDeleteGroupButton() {
        const element = this.buttons.groupDelete;
        I.click(element);
    },

    async getGroupUserCount() {
        const element = this.buttons.groupUserCount;
        return await I.grabTextFrom(element)
    },

}