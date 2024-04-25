import { SimpleMathsCalculator } from '../domains/simple-maths/simple-maths-calculator';
import { setWorldConstructor } from '@cucumber/cucumber';
import { WebDriver, Builder } from 'selenium-webdriver';
import * as chromeOpts from 'selenium-webdriver/chrome'
import 'chromedriver';
import { Stream } from 'stream';

export type MediaType = 'text/plain' | 'image/png' | 'application/json';
export type AttachBuffer = (data: Buffer, mediaType: MediaType) => void | Promise<void>;
export type AttachStream = (data: Stream, mediaType: MediaType) => void | Promise<void>;
export type AttachText = (data: string) => void | Promise<void>;
export type AttachStringifiedJson = (
  data: string,
  mediaType: 'application/json',
) => void | Promise<void>;
export type AttachBase64EncodedPng = (data: string, mediaType: 'image/png') => void | Promise<void>;
export type AttachFn = AttachBuffer &
  AttachStream &
  AttachBase64EncodedPng &
  AttachStringifiedJson &
  AttachText;

export interface CucumberWorldConstructorParams {
  attach: AttachFn;
  parameters: { [key: string]: string };
}

export class CustomWorld {
  public attach: AttachFn;
  public calculator: SimpleMathsCalculator = new SimpleMathsCalculator();
  public webdriver: WebDriver;
  public foo = false;
  public debug = false;

  /**
   *
   */
  constructor({ attach }: CucumberWorldConstructorParams) {
    this.attach = attach;
    const builder = new Builder();
    this.webdriver = builder.forBrowser('chrome').setChromeOptions(new chromeOpts.Options()).build();
  }
}

setWorldConstructor(CustomWorld);
