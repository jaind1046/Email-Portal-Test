/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type homePage = typeof import('./pages/home.page.js');
type loginPage = typeof import('./pages/login.page.js');
type userActivationPage = typeof import('./pages/account-activation.page.js');
type passwordResetPage = typeof import('./pages/password-reset.page.js');
type policyMainPage = typeof import('./pages/policy-main.page.js');
type policySgPage = typeof import('./pages/sender-groups.page.js');
type policyRgPage = typeof import('./pages/receiver-groups.page.js');
type policyPrPage = typeof import('./pages/processing-rules.page.js');
type policyCmpPage = typeof import('./pages/cmp.page.js');
type transactionsPage = typeof import('./pages/transactions.page.js');
type usersPage = typeof import('./pages/users.page.js');
type userGroupsPage = typeof import('./pages/groups.page.js');
type rolesPage = typeof import('./pages/roles.page.js');
type relayEndpointsPage = typeof import('./pages/relay-endpoints.page.js');
type systemSettingsPage = typeof import('./pages/system-settings.page.js');
type fileReleaseRPage = typeof import('./pages/file-release-request.page.js');
type Hooks = import('./hooks_helper.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, homePage: homePage, loginPage: loginPage, userActivationPage: userActivationPage, passwordResetPage: passwordResetPage, policyMainPage: policyMainPage, policySgPage: policySgPage, policyRgPage: policyRgPage, policyPrPage: policyPrPage, policyCmpPage: policyCmpPage, transactionsPage: transactionsPage, usersPage: usersPage, userGroupsPage: userGroupsPage, rolesPage: rolesPage, relayEndpointsPage: relayEndpointsPage, systemSettingsPage: systemSettingsPage, fileReleaseRPage: fileReleaseRPage }
  interface Methods extends Puppeteer, Hooks, Mochawesome {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
