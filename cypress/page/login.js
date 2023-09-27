class LoginPage {
    get usernameInput() {
      return cy.get('#User');
    }
  
    get passwordInput() {
      return cy.get('#password-field');
    }
  
    get loginButton() {
      return cy.get('#login');
    }
  

    visit() {
      cy.visit('https://analytics.mohaymen.ir/star/qa/27/');
    }
  
    login(username, password) {
      this.usernameInput.type(username);
      this.passwordInput.type(password);
      this.loginButton.click();
    }
  }
  
  export default new LoginPage();