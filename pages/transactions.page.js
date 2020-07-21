const { I } = inject();

module.exports = {


  /*
   * Datetimepicker
   * ***************************************************************
   */
  async getDatetimepickerElement() {
    return (`input[class*='date-time-picker']`);
  },

  async getDatetimepicker() {
    const element = await this.getDatetimepickerElement();
    return await I.grabAttributeFrom(element, jsonValue());
  },

  async setDatetimepicker(value) {
    const element = await this.getDatetimepickerElement();
    I.fillField(element, value);
  },

  /*
   * AddFilterButton
   * ***************************************************************
   */

  async getAddFilterButtonElement() {
    return (`button[id='addFilterButton']`);
  },

  async clickAddFilterButton() {
    const element = await this.getAddFilterButtonElement();
    I.click(element);
  },

  /*
   * From
   * ***************************************************************
   */

  async getFromElement() {
    return (`div[id='filterMenuPopup'] > ul > li:nth-of-type(1) > button`);
  },

  async clickFrom() {
    const element = await this.getFromElement();
    I.click(element);
  },

  /*
   * To
   * ***************************************************************
   */

  async getToElement() {
    return (`div[id='filterMenuPopup'] > ul > li:nth-of-type(2) > button`);
  },

  async clickTo() {
    const element = await this.getToElement();
    I.click(element);
  },

  /*
   * FileOutcomes
   * ***************************************************************
   */

  async getFileOutcomesElement() {
    return (`div[id='filterMenuPopup'] > ul > li:nth-of-type(3) > button`);
  },

  async clickFileOutcomes() {
    const element = await this.getFileOutcomesElement();
    I.click(element);
  },

  /*
   * TransactionId
   * ***************************************************************
   */

  async getTransactionIdElement() {
    return (`div[id='filterMenuPopup'] > ul > li:nth-of-type(4) > button`);
  },

  async clickTransactionId() {
    const element = await this.getTransactionIdElement();
    I.click(element);
  },

  /*
   * Subject
   * ***************************************************************
   */

  async getSubjectElement() {
    return (`div[id='filterMenuPopup'] > ul > li:nth-of-type(5) > button`);
  },

  async clickSubject() {
    const element = await this.getSubjectElement();
    I.click(element);
  },

  /*
   * FileName
   * ***************************************************************
   */

  async getFileNameElement() {
    return (`div[id='filterMenuPopup'] > ul > li:nth-of-type(6) > button`);
  },

  async clickFileName() {
    const element = await this.getFileNameElement();
    I.click(element);
  },

  /*
   * SendersEmailAddress
   * ***************************************************************
   */

  async getSendersEmailAddressElement() {
    return (`div[id='inputFilterSender'] > input`);
  },

  async getSendersEmailAddress() {
    const element = await this.getSendersEmailAddressElement();
    return await I.grabAttributeFrom(element, jsonValue());
  },

  async setSendersEmailAddress(value) {
    const element = await this.getSendersEmailAddressElement();
    I.fillField(element, value);
  },

  /*
   * Sender
   * ***************************************************************
   */

  async getSenderElement() {
    return (`button[name='sender']`);
  },

  async clickSender() {
    const element = await this.getSenderElement();
    I.click(element);
  },

  /*
   * RecipientsEmailAddress
   * ***************************************************************
   */

  async getRecipientsEmailAddressElement() {
    return (`div[id='inputFilterRecipient'] > input`);
  },

  async getRecipientsEmailAddress() {
    const element = await this.getRecipientsEmailAddressElement();
    return await I.grabAttributeFrom(element, jsonValue());
  },

  async setRecipientsEmailAddress(value) {
    const element = await this.getRecipientsEmailAddressElement();
    I.fillField(element, value);
  },

  /*
   * Recipient
   * ***************************************************************
   */

  async getRecipientElement() {
    return (`button[name='recipient']`);
  },

  async clickRecipient() {
    const element = await this.getRecipientElement();
    I.click(element);
  },

  /*
   * Held
   * ***************************************************************
   */

  async getHeldElement() {
    return (`input[id='heldTabCheckbox']`);
  },

  async getHeld() {
    const element = this.getHeldElement();
    return await (await element.getProperty('checked')).jsonValue();
  },

  async setHeld(onOrOff) {
    const val = await this.getHeld();
    if ((onOrOff && !val) || (!onOrOff && val)) {
      const element = await this.getHeldElement();
      I.click(element);
    }
  },

  /*
   * Disallowed
   * ***************************************************************
   */

  async getDisallowedElement() {
    return (`input[id='disallowedTabCheckbox']`);
  },

  async getDisallowed() {
    const element = this.getDisallowedElement();
    return await (await element.getProperty('checked')).jsonValue();
  },

  async setDisallowed(onOrOff) {
    const val = await this.getDisallowed();
    if ((onOrOff && !val) || (!onOrOff && val)) {
      const element = await this.getDisallowedElement();
      I.click(element);
    }
  },

  /*
   * Sanitised
   * ***************************************************************
   */

  async getSanitisedElement() {
    return (`input[id='sanitisedTabCheckbox']`);
  },

  async getSanitised() {
    const element = this.getSanitisedElement();
    return await (await element.getProperty('checked')).jsonValue();
  },

  async setSanitised(onOrOff) {
    const val = await this.getSanitised();
    if ((onOrOff && !val) || (!onOrOff && val)) {
      const element = await this.getSanitisedElement();
      I.click(element);
    }
  },

  /*
   * Allowed
   * ***************************************************************
   */

  async getAllowedElement() {
    return (`input[id='allowedTabCheckbox']`);
  },

  async getAllowed() {
    const element = this.getAllowedElement();
    return await (await element.getProperty('checked')).jsonValue();
  },

  async setAllowed(onOrOff) {
    const val = await this.getAllowed();
    if ((onOrOff && !val) || (!onOrOff && val)) {
      const element = await this.getAllowedElement();
      I.click(element);
    }
  },

  /*
   * Remediated
   * ***************************************************************
   */

  async getRemediatedElement() {
    return (`input[id='remediatedTabCheckbox']`);
  },

  async getRemediated() {
    const element = this.getRemediatedElement();
    return await (await element.getProperty('checked')).jsonValue();
  },

  async setRemediated(onOrOff) {
    const val = await this.getRemediated();
    if ((onOrOff && !val) || (!onOrOff && val)) {
      const element = await this.getRemediatedElement();
      I.click(element);
    }
  },

  /*
   * Clean
   * ***************************************************************
   */

  async getCleanElement() {
    return (`input[id='cleanTabCheckbox']`);
  },

  async getClean() {
    const element = this.getCleanElement();
    return await (await element.getProperty('checked')).jsonValue();
  },

  async setClean(onOrOff) {
    const val = await this.getClean();
    if ((onOrOff && !val) || (!onOrOff && val)) {
      const element = await this.getCleanElement();
      I.click(element);
    }
  },

  /*
   * Add
   * ***************************************************************
   */

  async getAddElement() {
    return (`button[class*='outcome-apply-button']`);
  },

  async clickAdd() {
    const element = await this.getAddElement();
    I.click(element);
  },

  /*
   * TransactionId2
   * ***************************************************************
   */

  async getTransactionId2Element() {
    return (`div[id='inputFilterTransactionID'] > input`);
  },

  async getTransactionId2() {
    const element = await this.getTransactionId2Element();
    return await I.grabAttributeFrom(element, jsonValue());
  },

  async setTransactionId2(value) {
    const element = await this.getTransactionId2Element();
    I.fillField(element, value);
  },

  /*
   * Transactionid
   * ***************************************************************
   */

  async getTransactionidElement() {
    return (`button[name='transaction-id']`);
  },

  async clickTransactionid() {
    const element = await this.getTransactionidElement();
    I.click(element);
  },

  /*
   * EmailSubject
   * ***************************************************************
   */

  async getEmailSubjectElement() {
    return (`div[id='inputFilterSubject'] > input`);
  },

  async getEmailSubject() {
    const element = await this.getEmailSubjectElement();
    return await I.grabAttributeFrom(element, jsonValue());
  },

  async setEmailSubject(value) {
    const element = await this.getEmailSubjectElement();
    I.fillField(element, value);
  },

  /*
   * Subject2
   * ***************************************************************
   */

  async getSubject2Element() {
    return (`button[name='subject']`);
  },

  async clickSubject2() {
    const element = await this.getSubject2Element();
    I.click(element);
  },

  /*
   * FileName2
   * ***************************************************************
   */

  async getFileName2Element() {
    return (`div[id='inputFilterFilename'] > input`);
  },

  async getFileName2() {
    const element = await this.getFileName2Element();
    return await I.grabAttributeFrom(element, jsonValue());
  },

  async setFileName2(value) {
    const element = await this.getFileName2Element();
    I.fillField(element, value);
  },

  /*
   * Filename
   * ***************************************************************
   */

  async getFilenameElement() {
    return (`button[name='file-name']`);
  },

  async clickFilename() {
    const element = await this.getFilenameElement();
    I.click(element);
  },

  /*
   * Element10
   * ***************************************************************
   */

  async getElement10Element() {
    return (`select[class*='page-size']`);
  },

  async getElement10Text() {
    const element = await this.getElement10Element();
    return await (await this.page.evaluate(el => el.options[el.selectedIndex].text, element));
  },

  async getElement10Value() {
    const element = await this.getElement10Element();
    return await (await page.evaluate(el => el.options[el.selectedIndex].value, element));
  },

  async setElement10ByValue(value) {
    const element = await this.getElement10Element();
    await (await page.evaluate(el => {
      Array.from(el.options).find(o => o.value === value).selected = 'selected';
    }, element));
  },

  async setElement10ByText(text) {
    const element = await this.getElement10Element();
    await (await page.evaluate(el => {
      Array.from(el.options).find(o => o.text === text).selected = 'selected';
    }, element));
  },

  /*
   * First
   * ***************************************************************
   */

  async getFirstElement() {
    return (`button[class*='first']`);
  },

  async clickFirst() {
    const element = await this.getFirstElement();
    I.click(element);
  },

  /*
   * Previous
   * ***************************************************************
   */

  async getPreviousElement() {
    return (`//div[3]/div/button[2]`)[0];
  },

  async clickPrevious() {
    const element = await this.getPreviousElement();
    I.click(element);
  },

  /*
   * One
   * ***************************************************************
   */

  async getOneElement() {
    return (`button[class*='custom-data-table-page']`);
  },

  async clickOne() {
    const element = await this.getOneElement();
    I.click(element);
  },

  /*
   * Next
   * ***************************************************************
   */

  async getNextElement() {
    return (`//button[3]`)[0];
  },

  async clickNext() {
    const element = await this.getNextElement();
    I.click(element);
  },

  /*
   * Last
   * ***************************************************************
   */

  async getLastElement() {
    return (`button[class*='last']`);
  },

  async clickLast() {
    const element = await this.getLastElement();
    I.click(element);
  },

  /*
   * Custompaginatorgoto
   * ***************************************************************
   */

  async getCustompaginatorgotoElement() {
    return (`input[class*='custom-paginator-goto']`);
  },

  async getCustompaginatorgoto() {
    const element = await this.getCustompaginatorgotoElement();
    return await I.grabAttributeFrom(element, jsonValue());
  },

  async setCustompaginatorgoto(value) {
    const element = await this.getCustompaginatorgotoElement();
    I.fillField(element, value);
  },

  /*
   * Go
   * ***************************************************************
   */

  async getGoElement() {
    return (`button[class*='custom-paginator-goto-button']`);
  },

  async clickGo() {
    const element = await this.getGoElement();
    I.click(element);
  },
}