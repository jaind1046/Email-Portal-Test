const {I} = inject();

module.exports = {

        userManagementUrl: '/User',



        /*
        * GroupsTab
        * ***************************************************************
        */
        async getGroupsTabElement() {
            return (`button[id='tab-l1-2']`);
        },
        async clickGroupsTab() {
            const element = await this.getGroupsTabElement();
            I.click(element);
        },

        /*
         * GroupList
         * ***************************************************************
         */
        async getGroupListElement() {
            return (`select[class*='select2-users']`);
        },

        async getGroupListText() {
            const element = await this.getGroupListElement();
            return await (await this.page.evaluate(el => el.options[el.selectedIndex].text, element));
        },

        async getGroupListValue() {
            const element = await this.getGroupListElement();
            return await (await page.evaluate(el => el.options[el.selectedIndex].value, element));
        },

        async setGroupListByValue(value) {
            const element = await this.getGroupListElement();
            await (await page.evaluate(el => {
                Array.from(el.options).find(o => o.value === value).selected = 'selected';
            }, element));
        },

        async setGroupListByText(text) {
            const element = await this.getGroupListElement();
            await (await page.evaluate(el => {
                Array.from(el.options).find(o => o.text === text).selected = 'selected';
            }, element));
        },

        /*
         * CancelSaveGroupButton
         * ***************************************************************
         */

        async getCancelSaveGroupButtonElement() {
            return (`button[id='cancelSaveGroupButton']`);
        },

        async clickCancelSaveGroupButton() {
            const element = await this.getCancelSaveGroupButtonElement();
            I.click(element);
        },

        /*
         * SaveGroupButton
         * ***************************************************************
         */

        async getSaveGroupButtonElement() {
            return (`button[id='saveGroupButton']`);
        },

        async clickSaveGroupButton() {
            const element = await this.getSaveGroupButtonElement();
            I.click(element);
        }
    }