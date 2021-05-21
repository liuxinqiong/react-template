import React from 'react';
import { Link } from 'react-router-dom';

import SelectLang from '@/components/SelectLang';
import { ReactIntl } from '@/components/LocaleWrapper/locale';

import styles from './index.less';

const { FormattedMessage } = ReactIntl;

const Home: React.FC = () => (
  <div className={styles.app}>
    <header className={styles.appHeader}>
      <FormattedMessage id="app.welcome" />
      <SelectLang />
      <Link to="/page1">page1</Link>
    </header>
  </div>
);

export default Home;
