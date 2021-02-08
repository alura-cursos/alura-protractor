import { browser, by, element } from 'protractor';
import { isRegExp } from 'util';

describe('Home Page', () => {

  it('Should navigate to user profile', async () => {
    await browser.get(`${browser.baseUrl}/#/user/flavio`);
    const title = await browser.getTitle();
    expect(title).toEqual('Timeline');
  });

  it('Should display a list of photos', async () => {
    await browser.get(`${browser.baseUrl}/#/user/flavio`);
    const list = element.all(by.css('.photo'));
    const photoListSize = await list.count();
    expect(photoListSize).toBeGreaterThan(0);
  });

  it('Should navigate to photo detail when photo navigation is triggered', async () => {
    await browser.get(`${browser.baseUrl}/#/user/flavio`);
    const firstElement = element.all(by.css('.photo')).first();
    await firstElement.click();
    const title = await browser.getTitle();
    expect(title).toBe('Photo detail');
  });
});
