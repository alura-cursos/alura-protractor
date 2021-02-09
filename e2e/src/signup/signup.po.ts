import { browser, by, element } from 'protractor';

export class SignUpPage {
  static PAGE_TITLE = 'Sign up';

  navigateTo() {
    return browser.get(`${browser.baseUrl}#/home/signup`);
  }

  getTitle() {
    return browser.getTitle();
  }

  fillField(formControlName: string, text:string) {
    return element(by.css(`input[formcontrolname=${formControlName}]`))
      .sendKeys(text);
  }

  register() {
    return element(by.css('button[type=submit]'))
      .click();
  }
}
