import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import { useLocale, useSetLocale } from 'react-admin';

const LocaleSwitcher = (classes) => {
  const locale = useLocale();
  const setLocale = useSetLocale();
  return (
    <Fragment>
      <Button
        style={{ margin: '1em' }}
        variant="contained"
        className={classes.button}
        color={locale === 'vn' ? 'primary' : 'default'}
        disabled={locale === 'en'}
        onClick={() => setLocale('en')}
      >
        EN
            </Button>
      <Button
        style={{ margin: '1em' }}
        variant="contained"
        className={classes.button}
        color={locale === 'en' ? 'primary' : 'default'}
        disabled={locale === 'vn'}
        onClick={() => setLocale('vn')}
      >
        VN
            </Button>
    </Fragment>
  );
};

export default LocaleSwitcher;