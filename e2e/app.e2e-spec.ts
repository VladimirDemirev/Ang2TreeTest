import { Ang2TreePage } from './app.po';

describe('ang2-tree App', () => {
  let page: Ang2TreePage;

  beforeEach(() => {
    page = new Ang2TreePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
