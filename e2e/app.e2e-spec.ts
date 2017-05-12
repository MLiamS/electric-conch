import { ElectricConchPage } from './app.po';

describe('electric-conch App', () => {
  let page: ElectricConchPage;

  beforeEach(() => {
    page = new ElectricConchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
