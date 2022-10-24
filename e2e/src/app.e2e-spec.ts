import { browser, element, by } from 'protractor';

describe('Two-way binding e2e tests', () => {

  beforeEach(() => browser.get(''));

  const minusButton = element.all(by.tagName('ui5-button')).get(0);
  const plusButton = element.all(by.tagName('ui5-button')).get(1);
  const minus2Button = element.all(by.tagName('ui5-button')).get(2);
  const plus2Button = element.all(by.tagName('ui5-button')).get(3);

  it('should display Two-way Binding', async () => {
    expect(await element(by.className('AppTitle')).getText()).toEqual('Two-way Binding');     

  });

  it('should display four buttons', async () => {
    expect(await minusButton.getText()).toBe('-');
    expect(await plusButton.getText()).toBe('+');
    expect(await minus2Button.getText()).toBe('-');
    expect(await plus2Button.getText()).toBe('+');
  });

  it('should change font size texts', async () => {
    await minusButton.click();
    expect(await element.all(by.className('ResizableLabel')).get(0).getText()).toEqual('FontSize: 15px');
    expect(await element(by.id('fontSizePx')).getAttribute('value')).toEqual('15');
    
    await plusButton.click();
    expect(await element.all(by.className('ResizableLabel')).get(0).getText()).toEqual('FontSize: 16px');
    expect(await element(by.id('fontSizePx')).getAttribute('value')).toEqual('16');
    
    await minus2Button.click();
    expect(await element.all(by.className('ResizableLabel')).get(1).getText()).toEqual('FontSize: 15px');
  });


  it('should display De-sugared two-way binding', async () => {
    expect(await element(by.className('SubTitle')).getText()).toEqual('De-sugared two-way binding');
  });


});
