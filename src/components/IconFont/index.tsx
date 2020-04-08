import { createFromIconfontCN } from '@ant-design/icons';

import { AppConfig } from '@/config/app';

export default createFromIconfontCN({
  scriptUrl: AppConfig.ICON_FONT_URL,
});
