import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import styles from './index.less';
import SelectLang from '@/components/SelectLang';
import { ReactIntl } from '@/locales/locale';
import { getProject } from '@/store/modules/project/actions';

const { FormattedMessage } = ReactIntl;

const Home: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProject('gnqg'));
  }, [dispatch]);

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

export default Home;
