import Hexo from 'hexo';
import safelinkify from 'safelinkify';

const defaultOptions = {
  // exclude patterns (dont anonymize these patterns)
  exclude: [
    'domain.com',
    /another.domain.com/,
    /https?:\/\/?(?:([^*]+)\.)?webmanajemen\.com/,
    /([a-z0-9](?:[a-z0-9-]{1,61}[a-z0-9])?[.])*webmanajemen\.com/
  ],
  // url redirector
  redirect: 'https://www.webmanajemen.com/page/safelink.html?url=',
  // debug
  verbose: false,
  // encryption type = 'base64' | 'aes'
  type: 'base64',
  // password aes, default = root
  password: 'unique-password'
};

export interface HexoSafelinkConfig {
  exclude: (string | RegExp)[];
  redirect: string;
  verbose: boolean;
  type: string;
  password: string;
}

export function HexoSafelink(hexo: Hexo) {
  const options: HexoSafelinkConfig = hexo.config.safelink;
  const sf = new safelinkify.safelink(options);
}
