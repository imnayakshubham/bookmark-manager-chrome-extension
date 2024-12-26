import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import Bowser from 'bowser';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getBrowserInfo = () => {
  const browser = Bowser.getParser(window.navigator.userAgent);

  const browserName = browser.getBrowserName();
  const browserVersion = browser.getBrowserVersion();
  const osName = browser.getOSName();
  const osVersion = browser.getOSVersion();
  const browserInfoKey = `${browserName}-${browserVersion}-${osName}-${osVersion}`;

  return {
    browserInfoKey,
    browserMetaData: browser.getResult()
  }

}
