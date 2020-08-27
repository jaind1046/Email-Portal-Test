const { I } = inject();

module.exports = {

//Locators   

  fields: {
     customPaginatorGoTo: `input[class*='custom-paginator-goto']`,
      },
  buttons: {
     previousPage: `#fileReleaseTable_wrapper div > button.paginate_button.transport.previous.disabled`,
     firstPage: `button[class*='first']`,
     nextPage: `#fileReleaseTable_wrapper div > button.paginate_button.transport.next.disabled`,
     lastPage: `button[class*='last']`,
     go: `button[class*='custom-paginator-goto-button']`,
     approve: `button[id='approveButton']`,
     deny: `button[id='denyButton']`,
     modalClose: `button[id='modalClose']`,
     closeFileReleaseRequest: `button[id='closeFileReleaseRequest']`,
     pendingFileReleaseCount: `span[class*='file-request-count']`
      },
  sections:{
      modalHeader: `section[id='fileDetailsModalContainer'] > header`,
      cmpDetails: `div[class*='content-management-details']`,
      fileHistory: `table[id*='fileHistoryTable']`,
      fileReleaseSuccess: `div[id='fileReleaseSuccess']`,
      fileReleaseFailure: `div[class*='deny-success-container']`
  },
  
  table:{
     fileRelease: `table[id='fileReleaseTable']`,
     },
  list:{
     itemsShown: `span[class*='select2-container']`,
    },
    link:{
        fileToRelease: `table[id='fileReleaseTable'] > tbody > tr:nth-of-type(1) > td:nth-of-type(2)`
    },

//Methods

/*
 * Release Request Table
 * ***************************************************************
 */
getPendingReleaseCount() {
    const element = this.buttons.pendingFileReleaseCount
    I.grabTextFrom(element)
},

/*
 * PageNavigation
 * ***************************************************************
 */
clickFirstPage() {
    const element = this.buttons.firstPage;
    I.click(element);
},

clickLastPage() {
    const element = this.buttons.lastPage;
     I.click(element);
},

clickPreviousPage() {
    const element = this.buttons.previousPage;
     I.click(element);
},

clickNextPage() {
    const element = this.buttons.nextPage;
     I.click(element);
},

goToCustomPage(pageNbr) {
    const element = this.fields.customPaginatorGoTo;
    I.fillField(element, pageNbr);
    I.click(this.buttons.go);
},

/*
 * File Release Modal Content
 * ***************************************************************
 */
getHeaderContent() {
    const element = this.sections.modalHeader;
    I.grabTextFrom(element);
},

getFileDetailsHeaderContent() {
    const element = this.sections.modalHeader;
    I.grabTextFrom(element);
},

getFileHistoryContent() {
    const element = this.sections.fileHistory;
    I.grabTextFrom(element);
},

closeFileDetailModal() {
    const element = this.buttons.modalClose;
    I.click(element);
},

clickOkOnFileDetailModal() {
    const element = this.buttons.closeFileReleaseRequest;
    I.click(element);
},
/*
 * File Release Approval
 * ***************************************************************
 */
clickApprove() {
    const element = this.buttons.approve;
    I.click(element);
},

clickDeny() {
    const element = this.buttons.deny;
    I.click(element);
},

clickDeny() {
    const element = this.buttons.deny;
    I.click(element);
},


}
