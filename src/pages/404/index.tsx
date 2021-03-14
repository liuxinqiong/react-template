import React from 'react';
import { Link } from 'react-router-dom';
import { useIntl, FormattedMessage } from 'react-intl';

import { Button, Result } from 'antd';

export default function NotFountPage() {
  const intl = useIntl();
  return (
    <Result
      status="404"
      title="404"
      subTitle={intl.formatMessage({ id: 'component.404.subTitle' })}
      extra={
        <Link to="/">
          <Button type="primary">
            <FormattedMessage id="app.helper.button.back-home" />
          </Button>
        </Link>
      }
    />
  );
}
