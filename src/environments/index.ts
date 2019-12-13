import { environment as dev } from './environment.dev';
import { environment as prod } from './environment.prod';
import { environment as local } from './environment.local';

const environmentConfig = {
  dev,
  prod,
  local,
};

const stage = process.env.REACT_APP_STAGE || 'local';

export const isLocalEnvironment = stage.startsWith('local');

export default environmentConfig[stage];
