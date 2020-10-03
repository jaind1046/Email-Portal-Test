Feature('Transaction log View Data Driven Tests')

const {
    I,
    transactionsPage,
    env
} = inject();

const {
    TestHelpers
} = require('../step_definitions/helpers/step_helpers')

const data = require('../../src/data/transaction-logs-data').data

const testHelpers = new TestHelpers()

// Data Test
Data(data).
Scenario('I set transaction date to all values in data file', async ({ I, current, transactionsPage }) => {
    I.login();
    I.wait(3);
    I.goToTransactionLog();
    I.wait(2)
    transactionsPage.clickDatePicker()
    var dateSelected = current.fromDate+"-"+current.toDate
    transactionsPage.setDatetimepicker(dateSelected)
});
