import React from 'react';
import {
  useTranslate,
  useLocale,
  useSetLocale,
  Title
} from 'react-admin';
import { useSelector, useDispatch } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import useStyles from '../profiles/utils/styles';
import { changeTheme } from '../../store/actions/themeAction';
import ChangePassWord from '../profiles/ChangePassWord';

const Configuration = () => {
  const translate = useTranslate();
  const locale = useLocale();
  const setLocale = useSetLocale();
  const classes = useStyles();
  const theme = useSelector(state => state.theme);
  const dispatch = useDispatch();

  return (
    <Card>
      <Title title={translate('pos.configuration')} />
      <CardContent>
        <div className={classes.label}>
          {translate('pos.theme.name')}
        </div>
        <Button
          variant="contained"
          className={classes.button}
          color={theme === 'light' ? 'primary' : 'default'}
          onClick={() => dispatch(changeTheme('light'))}
        >
          {translate('pos.theme.light')}
        </Button>
        <Button
          variant="contained"
          className={classes.button}
          color={theme === 'dark' ? 'primary' : 'default'}
          onClick={() => dispatch(changeTheme('dark'))}
        >
          {translate('pos.theme.dark')}
        </Button>
      </CardContent>
      <CardContent>
        <div className={classes.label}>{translate('pos.language')}</div>
        <Button
          variant="contained"
          className={classes.button}
          color={locale === 'vn' ? 'primary' : 'default'}
          onClick={() => setLocale('vn')}
        >
          vn
        </Button>
        <Button
          variant="contained"
          className={classes.button}
          color={locale === 'en' ? 'primary' : 'default'}
          onClick={() => setLocale('en')}
        >
          en
        </Button>
      </CardContent>
      <CardContent >
        <div className={classes.label}>{translate('pos.changePassword')}</div>
        <ChangePassWord />
      </CardContent>
    </Card>
  )
};

export default Configuration;