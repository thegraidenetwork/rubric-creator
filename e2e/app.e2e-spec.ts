import { AppPage } from './app.po';

describe('rubric-creator App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    void expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
