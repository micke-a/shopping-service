import { ShoppingWebA2Page } from './app.po';

describe('shopping-web-a2 App', function() {
  let page: ShoppingWebA2Page;

  beforeEach(() => {
    page = new ShoppingWebA2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
