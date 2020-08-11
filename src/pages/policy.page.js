//< reference path = './steps.d.ts' />

const {
  I
} = inject();

module.exports = {

  //Locators   

  buttons: {
    previousTab: `button[id='policyTabPrevious']`,
    currentTab: `button[id='policyTabCurrent']`,
    policyTabDraft: `button[id='policyTabDraft']`,
    processingRulesTabPrevious: `ul[class*='previous-tabs'] > li:nth-of-type(1) > button`,
    senderGroupsTabPrevious: `ul[class*='previous-tabs'] > li:nth-of-type(2) > button`,
    receiverGroupsTabPrevious: `ul[class*='previous-tabs'] > li:nth-of-type(3) > button`,
    cmpTabPrevious: `ul[class*='previous-tabs'] > li:nth-of-type(4) > button`,
    processingRulesTabCurrent: `ul[class*='current-tabs'] > li:nth-of-type(1) > button`,
    processingRulesTabDraft: `ul[class*='draft-tabs'] > li:nth-of-type(1) > button`,
    senderGroupsTabCurrent: `ul[class*='current-tabs'] > li:nth-of-type(2) > button`,
    senderGroupsTabDraft: `ul[class*='draft-tabs'] > li:nth-of-type(2) > button`,
    receiverGroupsTabCurrent: `ul[class*='current-tabs'] > li:nth-of-type(3) > button`,
    cmpTabCurrent: `ul[class*='current-tabs'] > li:nth-of-type(4) > button`,
    receiverGroupsTabDraft: `ul[class*='draft-tabs'] > li:nth-of-type(3) > button`,
    cmpTabDraft: `ul[class*='current-tabs'] > li:nth-of-type(4) > button`,
    publishDraftPolicy: `button[id='publishDraftPolicy']`
  },
  page: {
    title: ".//div[contains(@class, 'numbers__main-title-block')]"
  },

  
  //Methods


  /*
   * PolicyTabsPrevious
   * ***************************************************************
   */

  async clickPolicyTabPrevious() {
    const element = this.buttons.policyTabPrevious;
    I.click(element);
  },

  async clickPreviousProcessingRules() {
    const element = this.buttons.processingRulesTabPrevious;
    I.click(element);
  },

  async clickPreviousSenderGroups() {
    const element = this.buttons.senderGroupsTabPrevious;
    I.click(element);
  },

  async clickPreviousReceiverGroups() {
    const element = this.buttons.receiverGroupsTabPrevious;
    I.click(element);
  },

  async clickPreviousContentManagementPolicies() {
    const element = this.buttons.cmpTabPrevious;
    I.click(element);
  },

  /*
   * PolicyTabsCurrent
   * ***************************************************************
   */
  async clickPolicyTabCurrent() {
    const element = this.buttons.currentTab;
    I.click(element);
  },

  async clickCurrentSenderGroups() {
    const element = this.buttons.senderGroupsTabCurrent;
    I.click(element);
  },

  async clickCurrentReceiverGroups() {
    const element = this.buttons.receiverGroupsTabCurrent;
    I.click(element);
  },

  async clickCurrentContentManagementPolicies() {
    const element = this.buttons.cmpTabCurrent;
    I.click(element);
  },

  /*
   * PolicyTabsDraft
   * ***************************************************************
   */
  async clickDraftPolicyTab() {
    const element = this.buttons.policyTabDraft;
    I.click(element);
  },

  async clickDraftProcessingRules() {
    const element = this.buttons.processingRulesTabDraft;
    I.click(element);
  },

  async clickDraftSenderGroups() {
    const element = this.buttons.senderGroupsTabDraft;
    I.click(element);
  },

  async clickDraftReceiverGroups() {
    const element = this.getDraftReceiverGroupsElement();
    I.click(element);
  },

  async clickDraftContentManagementPolicies() {
    const element = this.getDraftContentManagementPoliciesElement();
    I.click(element);
  },

  async clickPublishDraftPolicy() {
    const element = this.getPublishDraftPolicyElement();
    I.click(element);
  }

}