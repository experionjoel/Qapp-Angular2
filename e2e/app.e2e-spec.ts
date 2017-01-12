import { QappPage } from './app.po';

describe('qapp App', function() {
  let page: QappPage;

  beforeEach(() => {
    page = new QappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
