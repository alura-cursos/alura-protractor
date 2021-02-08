import { browser, by, element, protractor } from 'protractor';import { HomePage } from './home.po';
;

describe('Home Page', () => {

  let homePage: HomePage;
  beforeEach(async () => {
    homePage = new HomePage();
    await homePage.navigateTo();
  });

  it('Should navigate to user profile', async () => {
    const title = await homePage.getWindowTitle();
    expect(title).toEqual('Timeline');
  });

  it('Should display a list of photos', async () => {
    const photoListSize = await element
      .all(by.css('.photo'))
      .count();
    expect(photoListSize).toBeGreaterThan(0);
  });

  it('Should navigate to photo detail when photo navigation is triggered', async () => {
    await element
      .all(by.css('.photo'))
      .first()
      .sendKeys(protractor.Key.ENTER);
    const title = await browser.getTitle();
    expect(title).toBe('Photo detail');
  });

  it('Should list one item when filtering by word "farol"', async () => {
    await element(by.css('ap-search input[type=search]'))
      .sendKeys('farol');
    const photoListSize = await element
      .all(by.css('.photo'))
      .count();
    expect(photoListSize).toBe(1);
  });
});
