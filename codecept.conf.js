exports.config = {
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://qa1.curlywurly.me',
      show: true,
      windowSize: '1536 x 826',
     chrome: {
       args: ['--no-sandbox', '--window-size=1536,826'],
     },
      waitForNavigation: ["domcontentloaded", "networkidle0"],
      waitForAction: 2000
    },
     Hooks: {
        require: './hooks_helper.js',
      },
    Mochawesome: {
      uniqueScreenshotNames: "true"
    }
  },
  include: {
    I: './steps_file.js',
    homePage: './pages/home.page.js',
    loginPage: './pages/login.page.js',
    userActivationPage: './pages/account-activation.page.js',
    passwordResetPage: './pages/password-reset.page.js',
    policyMainPage: './pages/policy-main.page.js',
    policySgPage: './pages/sender-groups.page.js',
    policyRgPage: './pages/receiver-groups.page.js',
    policyPrPage: './pages/processing-rules.page.js',
    policyCmpPage: './pages/cmp.page.js',
    transactionsPage: './pages/transactions.page.js',
    usersPage: './pages/users.page.js',
    userGroupsPage: './pages/groups.page.js',
    rolesPage: './pages/roles.page.js',
    relayEndpointsPage: './pages/relay-endpoints.page.js',
    systemSettingsPage: './pages/system-settings.page.js',
    fileReleaseRPage: './pages/file-release-request.page.js'
  },
  mocha: {
    reporterOptions: {
      "reportDir": "output"
    }
  },
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: './step_definitions/*.steps.js'
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    },
    allure: {
      enabled: true
    }
  },
  tests: './*.steps.js',
  name: 'email-portal-test'
}