import Unit from './Unit';
import { IS_MAINNET } from './constants';

export default {
  [Unit.SECTOR]: IS_MAINNET ? 'XSC' : 'TXSC',
};
