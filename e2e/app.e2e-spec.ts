import { SecondprojectPage } from './app.po';

describe('secondproject App', () => {
  let page: SecondprojectPage;

  beforeEach(() => {
    page = new SecondprojectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
