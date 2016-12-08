import { AppDeSitiosPage } from './app.po';

describe('app-de-sitios App', function() {
  let page: AppDeSitiosPage;

  beforeEach(() => {
    page = new AppDeSitiosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
