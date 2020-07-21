//< reference path = './steps.d.ts' /

//const customSteps = require('./steps_file');
//const I = actor(customSteps());
const {I} = inject();

module.exports = {


    policyManagementUrl: '/PolicyManagement',

    
        PolicyMenu: `a[class*='policies-link']`,
        title: ".//div[contains(@class, 'numbers__main-title-block')]"
    ,

    /*
     * PolicyMenu
     * ***************************************************************
     */

    async clickPolicy() {
        const element = await this.PolicyMenu;
        I.click(element);
    },

    
    /*
     * AddPrBtn
     * ***************************************************************
     */

    async getAddPrBtnElement() {
        return (`button[id='#addProcessingRuleButton']`);
    },

    async clickAddPrBtn() {
        const element = await this.getAddPrBtnElement();
        I.click(element);
    },

     /*
      * PolicyTable
      * ***************************************************************
      */

     async getPrTable() {
        return ("table[id='policyTabPR-content-Table']")
      },

      async getPublishedPrSender(sender) {
         I.see(sender, "table[id='policyTabPR-content-Table']//td[text()='"+sender+"']/ancestor::tr/td[2]");
      },


    /*
     * Senders
     * ***************************************************************
     */

    async getSenderElement() {
        const table = await this.getPrTable()
        const element = locate(table).find('tr').find(td).at(2).withChild('select');
        return element;
         },

    async getLastSenderEntry() {
        const table = await this.getPrTable()
        const element = locate(table).find('tr').last().find('td').at(2).withChild('select')
        return element;
    },


    async getSenderElement(option) {
        const table = await this.getPrTable()
        let row = locate(table).find('tr');
            for (let i = 1; i <= row.last; i++) {
                try {
                    const selectedOption = I.grabTextFrom(row.find('td').at(2).withChild('select'));
                    if (selectedOption == option) {
                    console.log("Selected option match " + option)
                    const element = row.find('td').at(2).find('select')
            }
            break
        } catch (err) {}
    } return element;
},


    async getSendersElement() {
        return (`select[class*='select2-sender-groups']`);
    },

   // async getSenderElement(option) {
       // return (this.getTableElement(option));
    //},


    async getSendersText() {
        const element = await this.getSendersElement();
        //return await (await I.grabTextFrom(el => el.options[el.selectedIndex].text, element));
    },

    async setSendersByValue(value) {
        const element = await this.getSendersElement();
        await (await I.selectOption(this.getSendersValue, value));
    },

    async setSendersByText(text) {
        const element = await this.getSendersElement();
        I.selectOption(element, text);
    },

    async setSenderByText(option,text) {
        const element = await this.getSenderElement(option);
        I.selectOption(element, text);
    },

    async setActiveRowSendersByText(text) {
        const element = await this.getLastSenderEntry();
        I.selectOption(element, text);
    },


    /*
     * Receivers
     * ***************************************************************
     */

    async getReceiversElement() {
        return (`select[class*='select2-receiver-groups']`);
    },

    async getLastReceiverEntry() {
        const table = await this.getPrTable()
        const element = locate(table).find('tr').last().find('td').at(3).withChild('select');
        return element;
    },

    async getReceiversText() {
        const element = await this.getReceiversElement();
        //return await (await I.grabTextFrom(el => el.options[el.selectedIndex].text, element));
    },

/*
    async getReceiversValue() {
        const element = await this.getReceiversElement();
        return await (await I.evaluate(el => el.options[el.selectedIndex].value, element));
    },

    async setReceiversByValue(value) {
        const element = await this.getReceiversElement();
        await (await I.selectOption(this.getReceiversValue, text));
    },
*/
    async setReceiversByText(text) {
        const element = await this.getReceiversElement();
        I.selectOption(element, text);
    },

     async setActiveRowReceiverByText(text) {
         const element = await this.getLastReceiverEntry();
         I.selectOption(element, text);
     },

    /*
     * DefaultContentManagementP
     * ***************************************************************
     */

    async getDefaultContentManagementPElement() {
        return (`select[class*='select2-content-management-policy']`);
    },

    async getLastCmpEntry() {
        const table = await this.getPrTable()
        const element = locate(table).find('tr').last().find('td').at(4).withChild('select');
        return element;
    },

    async getLastPublishedCmpEntry() {
        const table = await this.getPrTable()
        I.grabTextFrom(locate(table).find('tr').at(-1).find('td').at(4));
    },

    async getDefaultContentManagementPText() {
        const element = await this.getDefaultContentManagementPElement();
    },
/*
    async getDefaultContentManagementPValue() {
        const element = await this.getDefaultContentManagementPElement();
        return await (await I.evaluate(el => el.options[el.selectedIndex].value, element));
    },

    async setDefaultContentManagementPByValue(value) {
        const element = await this.getDefaultContentManagementPElement();
        await (await I.evaluate(el => {
            Array.from(el.options).find(o => o.value === value).selected = 'selected';
        }, element));
    },
*/
    async setDefaultContentManagementPByText(text) {
        const element = await this.getDefaultContentManagementPElement();
        I.selectOption(element, text);
    },

     async setActiveRowCmpByText(text) {
         const element = await this.getLastCmpEntry();
         I.selectOption(element, text);
     },


    async addPrRule(sender,receiver,cmp) {
        await this.clickAddPrBtn();
        this.setSendersByText(sender)
        this.setReceiversByText(receiver)
        this.setDefaultContentManagementPByText(cmp)
        //this.clickSavePrButton();
    },

    async addPrRuleWithDefaultValues() {
        await this.clickAddPrBtn();
        this.clickSavePrButton();
    },

    async editPrRule(oldSender,newSender, receiver, cmp) {
        this.setSenderByText(this.getSenderElement(oldSender),newSender)
        this.setReceiversByText(receiver)
        this.setDefaultContentManagementPByText(cmp)
        //this.clickSavePrButton();
    },


/*
 * Deleteprbutton
 * ***************************************************************
 */

async getDeletePrbtnElement() {
    return (`button[class*='delete-pr-button']`);
},

async clickDeletePrbtn() {
    const element = await this.getDeletePrbtnElement();
    I.click(element);
}
,
    /*
     * CancelPrButton
     * ***************************************************************
     */

    async getCancelPrButtonElement() {
        return (`button[id='cancelPRButton']`);
    },

    async clickCancelPrButton() {
        const element = await this.getCancelPrButtonElement();
        I.click(element);
    },

    /*
     * SavePrButton
     * ***************************************************************
     */

    async getSavePrButtonElement() {
        return (`button[id='savePRButton']`);
    },

    async clickSavePrButton() {
        const element = await this.getSavePrButtonElement();
        I.click(element);
    },

  /*
   * CancelPrDeleteConfirm
   * ***************************************************************
   */

  async getCancelPrDeleteConfirmElement() {
      return (`button[id='cancelPRDeleteConfirm']`);
  },

  async clickCancelPrDeleteConfirm() {
      const element = await this.getCancelPrDeleteConfirmElement();
      I.click(element);
  },

  /*
   * PrModalSaveButton
   * ***************************************************************
   */

  async getPrModalSaveButtonElement() {
      return (`button[id='prModalSaveButton']`);
  },

  async clickPrModalSaveButton() {
      const element = await this.getPrModalSaveButtonElement();
      I.click(element);
  },

  /*
   * PrDeleteModalClose
   * ***************************************************************
   */

  async getPrDeleteModalCloseElement() {
      return (`button[id='prDeleteModalClose']`);
  },

  async clickPrDeleteModalClose() {
      const element = await this.getPrDeleteModalCloseElement();
      I.click(element);
  },

  /*
   * PrNotification
   * ***************************************************************
   */

  async getPrNotificationElement() {
      return (`div[class*='toast-message']`);
  },

  async getPrNotification() {
      const element = await this.getPrNotificationElement();
      return await I.grabTextFrom(element);
  }

}