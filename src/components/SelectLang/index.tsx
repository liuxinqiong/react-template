import React from 'react';

import classNames from 'classnames';
import { GlobalOutlined } from '@ant-design/icons';
import { Menu, Dropdown } from 'antd';
import type { MenuProps } from 'antd';

import { intl, getLocale, setLocale } from '@/components/LocaleWrapper/locale';

import styles from './index.less';

const { formatMessage } = intl;

interface SelectLangProps {
  className?: string;
}
const SelectLang: React.FC<SelectLangProps> = (props) => {
  const { className } = props;
  const selectedLang = getLocale();
  const changeLang: MenuProps['onClick'] = ({ key }): void => setLocale(key as string, false);
  const locales = ['zh-CN', 'en-US'];
  const languageLabels = {
    'zh-CN': '简体中文',
    'en-US': 'English',
  };
  const languageIcons = {
    'zh-CN': '🇨🇳',
    'en-US': '🇺🇸',
  };
  const langMenu = (
    <Menu className={styles.menu} selectedKeys={[selectedLang]} onClick={changeLang}>
      {locales.map((locale) => (
        <Menu.Item key={locale}>
          <span role="img" aria-label={languageLabels[locale]}>
            {languageIcons[locale]}
          </span>{' '}
          {languageLabels[locale]}
        </Menu.Item>
      ))}
    </Menu>
  );
  return (
    <Dropdown overlay={langMenu} placement="bottomRight">
      <span className={classNames(styles.dropDown, className)}>
        <GlobalOutlined title={formatMessage({ id: 'component.selectLang.lang' })} />
      </span>
    </Dropdown>
  );
};

export default SelectLang;
