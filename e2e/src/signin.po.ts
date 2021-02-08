import { browser } from 'protractor';

export class SignInPage {
  static PAGE_TITLE = 'Sign in';

  getTitle() {
    return browser.getTitle();
  }
}
