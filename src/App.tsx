import React, { useState } from 'react';
import { Button, DatePicker } from 'antd';
import { hot } from 'react-hot-loader';
// import { Link, BrowserRouter as Router } from "react-router-dom";
import { FormattedMessage } from 'react-intl';
import { setLocale } from 'src/locales/locale';
import styles from './App.less';
import logo from './logo.svg';

const App: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <Button
          type="primary"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Button
        </Button>
        <Button
          type="primary"
          onClick={() => {
            setLocale('en-US', false);
          }}
        >
          英语
        </Button>
        <div>{count}</div>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>learn react</p>
        <a
          className={styles.appLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FormattedMessage id="app.user.button.login"></FormattedMessage>
        </a>
        <DatePicker></DatePicker>
        {/* <Router>
          <Link to="/"></Link>
        </Router> */}
      </header>
    </div>
  );
};

export default hot(module)(App);
