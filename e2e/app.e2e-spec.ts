import { AppPage } from './app.po';

describe('rubric-creator App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message on home page', () => {
    page.navigateTo();
    void expect(page.getHeaderText()).toEqual('Rubric Creator');
  });
});
