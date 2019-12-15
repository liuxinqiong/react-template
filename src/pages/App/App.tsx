import React from 'react';
import styles from './App.less';
import { Link } from 'react-router-dom';

import SelectLang from '@/components/SelectLang';
import { ReactIntl } from '@/locales/locale';

const { FormattedMessage } = ReactIntl;

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <FormattedMessage id="app.welcome"></FormattedMessage>
        <SelectLang />
        <Link to="/cad">cad</Link>
        <Link to="/info">info</Link>
      </header>
    </div>
  );
};

export default App;
