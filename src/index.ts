import Hexo from 'hexo';

export interface HexoSafelinkConfig {
  //
}

export default function HexoSafelink(hexo: Hexo) {
  const config: HexoSafelinkConfig = hexo.config.safelink;
}
