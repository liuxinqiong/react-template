import { environment as dev } from './environmentDev';
import { environment as prod } from './environmentProd';
import { environment as local } from './environmentLocal';

const environmentConfig = {
  dev,
  prod,
  local,
};

const stage = process.env.REACT_APP_STAGE || 'local';

export const isLocalEnvironment = stage.startsWith('local');

export default environmentConfig[stage];
