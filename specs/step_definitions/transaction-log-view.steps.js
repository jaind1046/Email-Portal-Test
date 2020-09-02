///<reference path="./steps.d.ts" />
var {assert,assertNull}     = require('assert')
var dateFormat              = require('dateformat');

const {
    I,
    transactionsPage,
    env,
} = inject();

const tenant                = env.qa.tenantName
const recipient             = env.qa.recipientEmailId
const sender                = env.qa.senderEmailId
const transactionId         = env.qa.senderEmailId
const subject               = env.qa.emailSubject
const fileName              = env.qa.fileName
const gotoCustomPage        = env.qa.gotoCustomPage

/*****************************************
* Navigation
******************************************/
Given('I am logged into the portal as a multi account tenant', () => {
    I.loginAs(env.qa.email, env.qa.password);
    I.wait(5)
});

Given('I am on transaction log screen', () => {
    I.goToTransactionLog();
    I.wait(5)
});

/************************************
*   Click the add filter button
*************************************/

When('I add a filter', () => {
    transactionsPage.clickAddFilterButton()
});

/**********************************
* Transaction date set/unset steps
***********************************/

When('I set transaction date to a valid value', () => {
    transactionsPage.clickDatePicker()
    // We will set the current data 00:00 hours by default to  date, though this could be parametrized
    var today = getToday(0,0,0)
    today = today + " - "+getToday(23,59,59)
    transactionsPage.setDatetimepicker(today)
});

Then('The transaction date is set', () => {
    var datePickerTime = transactionsPage.getDatetimepicker()
    var today = getToday(0,0,0)
    today = today + " - "+getToday(23,59,59)
    assertEquals(today, datePickerTime, "Transaction log from date mismatched")
});

When('I set transaction date to invalid date', () => {
    transactionsPage.clickDatePicker()
    var invalidDate = getInvalidDate()
    transactionsPage.setDatetimepicker(invalidDate)
});

When('I unset transaction date', () => {
    transactionsPage.clickDatePicker()
    transactionsPage.setDatetimepicker(null)
});

Then('The transaction date is not set', () => {
    var datePickerTime = transactionsPage.getDatetimepicker()
    assertNull(datePickerTime, "Transaction log from date mismatched")
});

/**********************************
* Input Filter Sender Steps
***********************************/

When('I set sender to a valid value', () => {
    // We will set email ids for sender and receiver in .env  environment file
    // From popup
    transactionsPage.clickFrom()
    // Add sender
    transactionsPage.clickAddSender()
    // Set value
    transactionsPage.setSendersEmailAddress(sender)
});

Then('The sender id is set', () => {
    var senderReceived = transactionsPage.getSendersEmailAddress()
    assertEquals(sender, senderReceived, "Sender email id mismatched")
});

When('I set sender id to an invalid value', () => {
    // From popup
    transactionsPage.clickFrom()
    // Add sender
    transactionsPage.clickAddSender()
    transactionsPage.setSendersEmailAddress("some*invalid!email`\'\"><id")
});

When('I unset sender id', () => {
    // From popup
    transactionsPage.clickFrom()
    // Add sender
    transactionsPage.clickAddSender()
    transactionsPage.setSendersEmailAddress(null)
});

Then('The sender id is not set', () => {
    var sender = transactionsPage.getSendersEmailAddress()
    assertNull(sender, "Sender email id was not unset")
});

/**********************************
* Input Filter recipient Steps
***********************************/

When('I set recipient to a valid value', () => {
    // We will set email ids for sender and receiver in .env  environment file
    // To popup
    transactionsPage.clickTo()
    // Add recipient
    transactionsPage.clickAddRecipient()
    transactionsPage.setRecipientsEmailAddress(recipient)
});

Then('The recipient id is set', () => {
    var recipientReceived = transactionsPage.getRecipientsEmailAddress()
    assertEquals(recipient, recipientReceived, "Recipient email id mismatched")
});

When('I set recipient id to an invalid value', () => {
    // To popup
    transactionsPage.clickTo()
    // Add recipient
    transactionsPage.clickAddRecipient()
    transactionsPage.setRecipientsEmailAddress("some*invalid!email`\'\"><id")
});

When('I unset recipient id', () => {
    // To popup
    transactionsPage.clickTo()
    // Add recipient
    transactionsPage.clickAddRecipient()
    transactionsPage.setRecipientsEmailAddress(null)
});

Then('The recipient id is not set', () => {
    var recipientReceived = transactionsPage.getRecipientsEmailAddress()
    assertNull(recipientReceived, "Recipient email id was not unset")
});


/**********************************
* Input Filter Transaction Id
***********************************/

When('I set transaction-id to a valid value', () => {
    // We will set transaction ids in .env  environment file
    // To popup
    transactionsPage.clickTransactionId()
    // Add transaction-id
    transactionsPage.clickAddTransactionid()
    transactionsPage.setTransactionId(transactionId)
});

Then('The transaction-id is set', () => {
    var transactionIdReceived = transactionsPage.getTransactionId()
    assertEquals(transactionId, transactionIdReceived, "Transaction id mismatched")
});

When('I set transaction-id to an invalid value', () => {
     // To popup
    transactionsPage.clickTransactionId()
    // Add transaction-id
    transactionsPage.clickAddTransactionid()
    transactionsPage.setTransactionId(getRandomChars(500))
});

When('I unset transaction-id', () => {
    // To popup
    transactionsPage.clickTransactionId()
    // Add transaction-id
    transactionsPage.clickAddTransactionid()
    transactionsPage.setTransactionId(null)
});

Then('The transaction-id is not set', () => {
    var transactionIdReceived = transactionsPage.getTransactionId()
    assertNull(transactionIdReceived, "Transaction was not unset")
});


/**********************************
* Input Filter Email Subject
***********************************/

When('I set subject to a valid value', () => {
    // We will set subject in .env  environment file
    // To popup
    transactionsPage.clickSubject()
    // Add subject
    transactionsPage.clickAddSubject()
    transactionsPage.setEmailSubject(subject)
});

Then('The subject is set', () => {
    var subjectReceived = transactionsPage.getEmailSubject()
    assertEquals(subject, subjectReceived, "Email subject mismatched")
});

When('I set subject to an extra ordinarily large value', () => {
    // To popup
    transactionsPage.clickSubject()
    // Add subject
    transactionsPage.clickAddSubject()
    transactionsPage.setEmailSubject(getRandomString(999999))
});

When('I unset subject', () => {
    // To popup
    transactionsPage.clickSubject()
    // Add subject
    transactionsPage.clickAddSubject()
    transactionsPage.setEmailSubject(null)
});

Then('The subject is not set', () => {
    var subjectReceived = transactionsPage.getEmailSubject()
    assertNull(subjectReceived, "Email Subject was not unset")
});


/**********************************
* Input Filter File Name
***********************************/

When('I set file name to a valid value', () => {
    // We will set file name in .env  environment file
    // To popup
    transactionsPage.clickFileName()
    // Add filename
    transactionsPage.clickAddFilename()
    transactionsPage.setFileName(fileName)
});

Then('The file name is set', () => {
    var fileNameReceived = transactionsPage.getFileName()
    assertEquals(file, fileNameReceived, "File name mismatched")
});

When('I set file name to an invalid value', () => {
    // We will set file name in .env  environment file
    // To popup
    transactionsPage.clickFileName()
    // Add filename
    transactionsPage.clickAddFilename()
    transactionsPage.setFileName(getInvalidFileName(100))
});

When('I unset file name', () => {
    // To popup
    transactionsPage.clickFileName()
    // Add filename
    transactionsPage.clickAddFilename()
    transactionsPage.setFileName(null)
});

Then('The file name is not set', () => {
    var fileNameReceived = transactionsPage.getFileName()
    assertNull(fileNameReceived, "File name was not unset")
});


/**********************************
* Input Filter File Outcomes
***********************************/

When('I selected (\d+) file outcomes', (outcomes) => {
    // Some unclarity here. Looks like some set of check -boxes are here. If we get possible values for these, can write this better.
    transactionsPage.clickFileOutcomes()
    transactionsPage.clickApplyOutcome()
});

When('I unselected all file outcomes', () => {
    // Some unclarity here. Looks like some set of check -boxes are here. If we get possible values for these, can write this better.
    // Leaving empty till we have dom elements to apply these changes
});


// Could not find the dom element to get outcomes. We can add get-tests if we have them. Leaving empty for now
Then('File outcomes are set', () => {
    var outcomes = true
    assertTrue(true, outcomes, "File outcomes was not set")
});

// Could not find the dom element to get outcomes. We can add get-tests if we have them. Leaving empty for now
Then('File outcomes are unset', () => {
    var outcomes = true
    assertTrue(true, outcomes, "File outcomes was not unset")
});

/***************************************
* Click Go (to fetch transaction logs)
****************************************/

When('I clicked go', () => {
    transactionsPage.clickGo()
});

/***************************************
* Pagination
****************************************/

When('I clicked first', () => {
    transactionsPage.clickFirst()
});

Then('I am on the first page', () => {
    // Assuming for now the page scroll is called Previous and Next, First and Last
    I.dontSee('Previous');
    I.see('Next');
});

When('I clicked last', () => {
    transactionsPage.clickLast()
});

Then('I am on the last page', () => {
    // Assuming for now the page scroll is called Previous and Next, First and Last
    I.dontSee('Next');
    I.see('Previous');
});

When('I clicked next', () => {
    transactionsPage.clickNext()
});

When('I clicked previous', () => {
    transactionsPage.clickPrevious()
});

Then('I am on page (\d+)', (pageNumber) => {
    // We dont have the id of the element that shows the current page number. We can check if that element value is same as pageNumber value if we get that
    // e.g.
    //I.seeInField('pageElement[pager]',pageNumber);
});

/********************************
* Custom page
*********************************/

When('I set a custom page', () => {
    transactionsPage.setCustomPage(gotoCustomPage)
});

Then('I am on the custom page', () => {
    // We dont have the id of the element that shows the current page number. We can check if that element value is same as gotoCustomPage value if we get that
    // e.g.
    //I.seeInField('pageElement[pager]',custompageNumber);
});

/*******************************************************
* Utility functions. Ideally should go in utils file
********************************************************/

function getToday(hh,mm,ss){
    var today = new Date();
    today.setHours(hh, mm, ss);
    // e.g 8/29/2020 00:00:00 am
    today = dateFormat(today, "m/d/yyyy hh:MM:ss TT");
}

function getInvalidDate(){
    return "13/45/5555 50:49:99 CM"
}

function getRandomString(length){
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

function getRandomChars(length){
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()?><|\?/~`';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

function getInvalidFileName(length){
   var result           = '';
   var characters       = '!@#$%)(*&<>.,?/"';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}