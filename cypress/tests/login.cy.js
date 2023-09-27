import LoginPage from '../pageObjects/LoginPage';

describe('Login Test', () => {
  it('should log in successfully', () => {
    LoginPage.visit();
    LoginPage.login('r.daneshi', '12345678');
  });
});
