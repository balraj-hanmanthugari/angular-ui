import { AppPage } from './app.po';

describe('angular-ui App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display application title', () => {
    page.navigateTo();
    expect(page.getAppTitle()).toEqual('Angular Learning', 'Error while checking app Title');
    page.waitSomeTime();
  });
});
