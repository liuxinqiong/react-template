import { environment as dev } from './environmentDev';
import { environment as prod } from './environmentProd';
import { environment as local } from './environmentLocal';
import { environment as rc } from './environmentRc';
import { environment as preview } from './environmentPreview';
import { environment as hotfix } from './environmentHotfix';

const environmentConfig = {
  dev,
  prod,
  local,
  rc,
  hotfix,
  preview,
};

const stage = process.env.REACT_APP_STAGE || 'local';

export const isLocalEnvironment = stage.startsWith('local');

export default environmentConfig[stage];
