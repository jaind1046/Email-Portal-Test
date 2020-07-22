exports.config = {
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'process.env.URL' || 'https://qa1.curlywurly.me',
      email: 'process.env.QA_EMAIL',
      password: 'process.env.QA_PASSWORD',
      show: true,
      windowSize: '1536 x 826',
     chrome: {
       args: ['--no-sandbox', '--window-size=1536,826'],
     },
      waitForNavigation: ["domcontentloaded", "networkidle0"],
      waitForAction: 2000
    },
     Hooks: {
        require: './src/utils/hooks_helper.js',
      },
    Mochawesome: {
      uniqueScreenshotNames: "true" 
    }
  },
  include: {
    I: './specs/step_definitions/steps_file.js',
    env: './credentials.js',

    homePage: './src/pages/home.page.js',
    loginPage: './src/pages/login.page.js',
    userActivationPage: './src/pages/account-activation.page.js',
    passwordResetPage: './src/pages/password-reset.page.js',
    policyMainPage: './src/pages/policy-main.page.js',
    policySgPage: './src/pages/sender-groups.page.js',
    policyRgPage: './src/pages/receiver-groups.page.js',
    policyPrPage: './src/pages/processing-rules.page.js',
    policyCmpPage: './src/pages/cmp.page.js',
    transactionsPage: './src/pages/transactions.page.js',
    usersPage: './src/pages/users.page.js',
    userGroupsPage: './src/pages/groups.page.js',
    rolesPage: './src/pages/roles.page.js',
    relayEndpointsPage: './src/pages/relay-endpoints.page.js',
    systemSettingsPage: './src/pages/system-settings.page.js',
    fileReleaseRPage: './src/pages/file-release-request.page.js'
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
    features: './specs/features/*.feature',
    steps: './specs/step_definitions/*.steps.js'
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