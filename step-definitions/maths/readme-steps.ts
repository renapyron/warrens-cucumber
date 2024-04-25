import { CustomWorld } from '../../world';
import { SimpleMathsCalculator } from '../../domains/simple-maths/simple-maths-calculator';
import { Before, Given, Then, When } from '@cucumber/cucumber';
import { assert } from 'chai';

let readmeUrl = '';
// Ref: https://github.com/e2e-boilerplate/selenium-webdriver-typescript-ts-node-jasmine-expect/blob/master/spec/sandbox.spec.ts
Given('Given a github readme url', async function (this: CustomWorld, value: number) {
  this.calculator.startWith(value);
});

When('When I load this page', async function (this: CustomWorld, value: number) {
  this.calculator.incrementBy(value);
});

Then('it should contain the text "warren\'s cucumber"', async function (this: CustomWorld, value: number) {
  assert.strictEqual(this.calculator.result, value);
});

/**
 * Before each scenario hook
 */
Before({ tags: '@foo' }, async function (this: CustomWorld) {
  this.foo = true;
});
