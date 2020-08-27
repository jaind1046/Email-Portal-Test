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

  clickPolicyTabPrevious() {
    const element = this.buttons.policyTabPrevious;
    I.click(element);
  },

  clickPreviousProcessingRules() {
    const element = this.buttons.processingRulesTabPrevious;
    I.click(element);
  },

  clickPreviousSenderGroups() {
    const element = this.buttons.senderGroupsTabPrevious;
    I.click(element);
  },

  clickPreviousReceiverGroups() {
    const element = this.buttons.receiverGroupsTabPrevious;
    I.click(element);
  },

  clickPreviousContentManagementPolicies() {
    const element = this.buttons.cmpTabPrevious;
    I.click(element);
  },

  /*
   * PolicyTabsCurrent
   * ***************************************************************
   */
  clickPolicyTabCurrent() {
    const element = this.buttons.currentTab;
    I.click(element);
  },

  clickCurrentSenderGroups() {
    const element = this.buttons.senderGroupsTabCurrent;
    I.click(element);
  },

  clickCurrentReceiverGroups() {
    const element = this.buttons.receiverGroupsTabCurrent;
    I.click(element);
  },

  clickCurrentContentManagementPolicies() {
    const element = this.buttons.cmpTabCurrent;
    I.click(element);
  },

  /*
   * PolicyTabsDraft
   * ***************************************************************
   */
  clickDraftPolicyTab() {
    const element = this.buttons.policyTabDraft;
    I.click(element);
  },

  clickDraftProcessingRules() {
    const element = this.buttons.processingRulesTabDraft;
    I.click(element);
  },

  clickDraftSenderGroups() {
    const element = this.buttons.senderGroupsTabDraft;
    I.click(element);
  },

  clickDraftReceiverGroups() {
    const element = this.getDraftReceiverGroupsElement();
    I.click(element);
  },

  clickDraftContentManagementPolicies() {
    const element = this.getDraftContentManagementPoliciesElement();
    I.click(element);
  },

  clickPublishDraftPolicy() {
    const element = this.getPublishDraftPolicyElement();
    I.click(element);
  }

}