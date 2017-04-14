import { HpeWebPage } from './app.po';

describe('hpe-web App', function() {
  let page: HpeWebPage;

  beforeEach(() => {
    page = new HpeWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
