import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Button, DatePicker } from 'antd'
import { hot } from 'react-hot-loader'
import { Link, BrowserRouter as Router } from 'react-router-dom'
import { FormattedMessage, useIntl } from 'react-intl'
import { setLocale } from 'src/locales/locale'

const App: React.FC = () => {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <Button
          type="primary"
          onClick={() => {
            setCount(count + 1)
          }}
        >
          Button1
        </Button>
        <Button
          type="primary"
          onClick={() => {
            setLocale('en-US', false)
          }}
        >
          英语
        </Button>
        <div>{count}</div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
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
  )
}

export default hot(module)(App)
