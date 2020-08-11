const {
  I
} = inject();

module.exports = {
<<<<<<< HEAD
 
   
    // setting locators
    fields: {
      user: 'Email',
      password: 'Password',
      loginError: 'validation-error',
      passwordResetLink: `a[id='forgotPasswordLink']`
     
      //validation-error login-error

    },
    loginButton: 'Log In',


    /*
     * EmailAddress
     * ***************************************************************
     */

    async getEmailAddressElement() {
      return (`input[id='Email']`);
    },

    async setEmailAddress(value) {
      const element = await this.getEmailAddressElement();
      I.fillField(element, value);
    },

    /*
     * Password
     * ***************************************************************
     */

    async getPasswordElement() {
      return (`input[id='Password']`);
    },

    async setPassword(value) {
      const element = await this.getPasswordElement();
      I.fillField(element, value);
    },

    /*
     * LoginTermsButton
     * ***************************************************************
     */

    async getLoginTermsButtonElement() {
      return (`button[id='loginTermsButton']`);
    },

    async clickLoginTermsButton() {
      const element = await this.getLoginTermsButtonElement();
      I.click(element);
    },

    /*
     * LogIn
     * ***************************************************************
     */

    async getLogInElement() {
      return (`button[class*='log-in-button']`);
    },

    async clickLogIn() {
      const element = await this.getLogInElement();
      I.click(element);
    },

    async getLoginErrorElement() {
      return ('//*[@id="loginForm"]/span')
    },

    /*
     * ForgotPasswordLink
     * ***************************************************************
     */

    async getForgotPasswordLinkElement() {
      return (`a[id='forgotPasswordLink']`);
    },

    async clickForgotPasswordLink() {
      const element = await this.getForgotPasswordLinkElement();
      I.click(element);
    },

    /*
     * AccountActivationLink
     * ***************************************************************
     */

    async getAccountActivationLinkElement() {
      return (`a[id='accountActivationLink']`);
    },

    async clickAccountActivationLink() {
      const element = await this.getAccountActivationLinkElement();
      I.click(element);
    },

    /*
     * CurrentLocale
     * ***************************************************************
     */

    async getCurrentLocaleElement() {
      return (`button[id='currentLocale']`);
    },

    async clickCurrentLocale() {
      const element = await this.getCurrentLocaleElement();
      I.click(element);
    },

   
    /*
     * Dev
     * ***************************************************************
     */

    async getDevElement() {
      return (`button[class*='locale-dev']`);
    },

    async clickDev() {
      const element = await this.getDevElement();
      I.click(element);
    },


    /*
     * Qa2
     * ***************************************************************
     */

    async getQa2Element() {
      return (`button[class*='locale-qa2']`);
    },

    async clickQa2() {
      const element = await this.getQa2Element();
      I.click(element);
    },

    /*
     * Stage
     * ***************************************************************
     */

    async getStageElement() {
      return (`button[class*='locale-stage']`);
    },

    async clickStage() {
      const element = await this.getStageElement();
      I.click(element);
    },

    /*
     * Perf
     * ***************************************************************
     */

    async getPerfElement() {
      return (`button[class*='locale-perf']`);
    },

    async clickPerf() {
      const element = await this.getPerfElement();
      I.click(element);
    },

    /*
     * Pent
     * ***************************************************************
     */

    async getPentElement() {
      return (`button[class*='locale-pent']`);
    },

    async clickPent() {
      const element = await this.getPentElement();
      I.click(element);
    },

    /*
     * CloseLoginTerms
     * ***************************************************************
     */

    async getCloseLoginTermsElement() {
      return (`button[id='closeLoginTerms']`);
    },

    async clickCloseLoginTerms() {
      const element = await this.getCloseLoginTermsElement();
      I.click(element);
    },

    /*
     * Modalclosebutton
     * ***************************************************************
     */

    async getModalclosebuttonElement() {
      return (`button[class*='modal-close-button']`);
    },

    async clickModalclosebutton() {
      const element = await this.getModalclosebuttonElement();
      I.click(element);
    },

    // methods

    loginWith(email, password) {
      I.fillField(this.fields.user, email);
      I.fillField(this.fields.password, password);
      I.click(this.loginButton);
    },

    loginAsAdmin() {
      this.loginWith(this.adminCredentials.user, this.adminCredentials.password);
    },

    errorMsg(){
      let pin = I.grabTextFrom(this.fields.loginError);
    },

    // goToPasswordReset() {
    //   I.amOnPage(this.mainUrl);
    //   I.clickLink(this.fields.passwordResetLink);

    // },
=======


  //locators
  fields: {
    email: `input[id='Email']`,
    password: `input[id='Password']`,
    loginError: 'validation-error'
  },
  links: {
    passwordReset: `a[id='forgotPasswordLink']`,
    accountActivation: `a[id='accountActivationLink']`,
  },
  buttons: {
    login: `button[class*='log-in-button']`,
    terms: `button[id='loginTermsButton']`,
    localeDev: `button[class*='locale-dev']`,
    localeStage: `button[class*='locale-stage']`,
    localePerf: `button[class*='locale-perf']`,
    localeQa: `button[class*='locale-qa1']`,
    localePent: `button[class*='locale-pent']`,
    closeLoginTerms: `button[id='closeLoginTerms']`,
    modalClose: `button[class*='modal-close-button']`
  },
  lists: {
    locale: `button[id='currentLocale']`
  },

  //Methods

  /*
   * EmailAddress
   * ***************************************************************
   */
  setEmailAddress(value) {
    const element = this.fields.email;
    I.fillField(element, value);
  },

  /*
   * Password
   * ***************************************************************
   */
  setPassword(value) {
    const element = this.fields.password;
    I.fillField(element, value);
  },

  clickForgotPasswordLink() {
    const element = this.links.passwordReset;
    I.click(element);
  },

  /*
   * LoginTerms
   * ***************************************************************
   */
  clickLoginTermsButton() {
    const element = this.buttons.terms;
    I.click(element);
  },

  clickCloseLoginTerms() {
    const element = this.buttons.closeLoginTerms;
    I.click(element);
  },

  clickModalclosebutton() {
    const element = this.buttons.modalClose;
    I.click(element);
  },

  /*
   * LogIn
   * ***************************************************************
   */
  clickLogIn() {
    const element = this.buttons.login;
    I.click(element);
  },

  errorMsg() {
    let pin = I.grabTextFrom(this.fields.loginError);
  },
  
  loginWith(email, password) {
    I.fillField(this.fields.email, email);
    I.fillField(this.fields.password, password);
    I.click(this.buttons.login);
  },

  /*
   * AccountActivationLink
   * ***************************************************************
   */
  clickAccountActivationLink() {
    const element = this.links.accountActivation;
    I.click(element);
  },

  /*
   * CurrentLocale
   * ***************************************************************
   */
  clickCurrentLocale() {
    const element = this.lists.locale;
    I.click(element);
  },

  clickDev() {
    const element = this.buttons.localeDev;
    I.click(element);
  },

  clickQa1() {
    const element = this.buttons.localeQa;
    I.click(element);
  },

  clickStage() {
    const element = this.buttons.localeStage;
    I.click(element);
  },

  clickPerf() {
    const element = this.buttons.localePerf;
    I.click(element);
  },

  clickPent() {
    const element = locate(this.buttons.localePent);
    I.click(element);
  },
>>>>>>> Locators update

    

  


};