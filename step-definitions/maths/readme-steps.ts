import { CustomWorld } from '../../world';
import { Before, Given, Then, When } from '@cucumber/cucumber';
import { assert } from 'chai';

// Ref: https://github.com/e2e-boilerplate/selenium-webdriver-typescript-ts-node-jasmine-expect/blob/master/spec/sandbox.spec.ts
Given('Given a github readme url', async function (this: CustomWorld, value: number) {
  this.calculator.startWith(value);
});

When('When I load this page', async function (this: CustomWorld) {

  await this.webdriver.get("https://github.com/renapyron/warrens-cucumber");
});

Then('it should contain the text "warren\'s cucumber"', async function (this: CustomWorld) {
  const html = await this.webdriver.getPageSource();

  assert.include(html, 'warren\'s cucumber');
});

/**
 * Before each scenario hook
 */
Before({ tags: '@foo' }, async function (this: CustomWorld) {
  this.foo = true;
});
