//< reference path = './steps.d.ts' />

const { I } = inject();

module.exports = {


  policyManagementUrl: '/PolicyManagement',
 
  page: {
    title: ".//div[contains(@class, 'numbers__main-title-block')]"
  },

 /*
  * PolicyTabPrevious
  * ***************************************************************
  */

 async getPolicyTabPreviousElement() {
   return (`button[id='policyTabPrevious']`);
 },

 async clickPolicyTabPrevious() {
   const element = await this.getPolicyTabPreviousElement();
   I.click(element);
 },

 /*
  * PreviousProcessingRules
  * ***************************************************************
  */

 async getPreviousProcessingRulesElement() {
   return (`ul[class*='previous-tabs'] > li:nth-of-type(1) > button`);
 },

 async clickPreviousProcessingRules() {
   const element = await this.getPreviousProcessingRulesElement();
   I.click(element);
 },

 /*
  * PreviousSenderGroups
  * ***************************************************************
  */

 async getPreviousSenderGroupsElement() {
   return (`ul[class*='previous-tabs'] > li:nth-of-type(2) > button`);
 },

 async clickPreviousSenderGroups() {
   const element = await this.getPreviousSenderGroupsElement();
   I.click(element);
 },

 /*
  * PreviousReceiverGroups
  * ***************************************************************
  */

 async getPreviousReceiverGroupsElement() {
   return (`ul[class*='previous-tabs'] > li:nth-of-type(3) > button`);
 },

 async clickPreviousReceiverGroups() {
   const element = await this.getPreviousReceiverGroupsElement();
   I.click(element);
 },

 /*
  * PreviousContentManagementPolicies
  * ***************************************************************
  */

 async getPreviousContentManagementPoliciesElement() {
   return (`ul[class*='previous-tabs'] > li:nth-of-type(4) > button`);
 },

 async clickPreviousContentManagementPolicies() {
   const element = await this.getPreviousContentManagementPoliciesElement();
   I.click(element);
 },

 /*
  * PolicyTabCurrent
  * ***************************************************************
  */

 async getPolicyTabCurrentElement() {
   return (`button[id='policyTabCurrent']`);
 },

 async clickPolicyTabCurrent() {
   const element = await this.getPolicyTabCurrentElement();
   I.click(element);
 },

 /*
  * PolicyTabPRcontent
  * ***************************************************************
  */

 async getPolicyTabPRcontentElement() {
   return (`section[id='policyTabPR-content']`);
 },

 async getPolicyTabPRcontent() {
   const element = await this.getPolicyTabPRcontentElement();
   return await I.grabTextFrom(element);
 },



 /*
  * CurrentProcessingRules
  * ***************************************************************
  */

 async getCurrentProcessingRulesElement() {
   return (`ul[class*='current-tabs'] > li:nth-of-type(1) > button`);
 },

 /*
  * CurrentSenderGroups
  * ***************************************************************
  */

 async getCurrentSenderGroupsElement() {
   return (`ul[class*='current-tabs'] > li:nth-of-type(2) > button`);
 },

 async clickCurrentSenderGroups() {
   const element = await this.getCurrentSenderGroupsElement();
   I.click(element);
 },

 /*
  * CurrentReceiverGroups
  * ***************************************************************
  */

 async getCurrentReceiverGroupsElement() {
   return (`ul[class*='current-tabs'] > li:nth-of-type(3) > button`);
 },

 async clickCurrentReceiverGroups() {
   const element = await this.getCurrentReceiverGroupsElement();
   I.click(element);
 },

 /*
  * CurrentContentManagementPolicies
  * ***************************************************************
  */

 async getCurrentContentManagementPoliciesElement() {
   return (`ul[class*='current-tabs'] > li:nth-of-type(4) > button`);
 },

 async clickCurrentContentManagementPolicies() {
   const element = await this.getCurrentContentManagementPoliciesElement();
   I.click(element);
 },

 /*
  * DraftPolicyTab
  * ***************************************************************
  */

 async getDraftPolicyTab() {
   return (`button[id='policyTabDraft']`);
 },
 async clickDraftPolicyTab() {
   const element = await this.getDraftPolicyTab();
   I.click(element);
 },

 /*
  * DraftProcessingRules
  * ***************************************************************
  */
 async getDraftProcessingRulesElement() {
   return (`ul[class*='draft-tabs'] > li:nth-of-type(1) > button`);
 },
 async clickDraftProcessingRules() {
   const element = await this.getDraftProcessingRulesElement();
   I.click(element);
 },

 /*
  * DraftSenderGroups
  * ***************************************************************
  */

 async getDraftSenderGroupsElement() {
   return (`ul[class*='draft-tabs'] > li:nth-of-type(2) > button`);
 },

 async clickDraftSenderGroups() {
   const element = await this.getDraftSenderGroupsElement();
   I.click(element);
 },

 /*
  * DraftReceiverGroups
  * ***************************************************************
  */

 async getDraftReceiverGroupsElement() {
   return (`ul[class*='draft-tabs'] > li:nth-of-type(3) > button`);
 },

 async clickDraftReceiverGroups() {
   const element = await this.getDraftReceiverGroupsElement();
   I.click(element);
 },

 /*
  * DraftContentManagementPolicies
  * ***************************************************************
  */

 async getDraftContentManagementPoliciesElement() {
   return (`ul[class*='draft-tabs'] > li:nth-of-type(4) > button`);
 },

 async clickDraftContentManagementPolicies() {
   const element = await this.getDraftContentManagementPoliciesElement();
   I.click(element);
 },

 
 /*
  * PublishDraftPolicy
  * ***************************************************************
  */

 async getPublishDraftPolicyElement() {
   return (`button[id='publishDraftPolicy']`);
 },

 async clickPublishDraftPolicy() {
   const element = await this.getPublishDraftPolicyElement();
   I.click(element);
 },
}