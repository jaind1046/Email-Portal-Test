const {
    I
} = inject();

module.exports = {

    /*
     * AddUserBtn
     * ***************************************************************
     */
    async getAddUserBtnElement() {
        return (`section[id='tab-l1-1-content'] > header > div > button`);
    },
    async clickAddUserBtn() {
        const element = await this.getAddUserBtnElement();
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