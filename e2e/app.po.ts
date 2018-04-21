import { browser, by, element } from 'protractor';

export class AppPage {
  public navigateTo(): any {
    return browser.get('/');
  }

  public getHeaderText(): string {
    return element(by.css('rc-root h1')).getText();
  }
}
