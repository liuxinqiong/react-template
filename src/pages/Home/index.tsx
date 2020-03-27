import React from 'react';
import { Link } from 'react-router-dom';

import styles from './index.less';
import SelectLang from '@/components/SelectLang';
import { ReactIntl } from '@/locales/locale';

const { FormattedMessage } = ReactIntl;

const Home: React.FC = () => (
  <div className={styles.app}>
    <header className={styles.appHeader}>
      <FormattedMessage id="app.welcome"></FormattedMessage>
      <SelectLang />
      <Link to="/page1">page1</Link>
      <Link to="/page2">page2</Link>
    </header>
  </div>
);

export default Home;
