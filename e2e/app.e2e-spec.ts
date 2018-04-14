import { BrushupPage } from './app.po';

describe('brushup App', function() {
  let page: BrushupPage;

  beforeEach(() => {
    page = new BrushupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
