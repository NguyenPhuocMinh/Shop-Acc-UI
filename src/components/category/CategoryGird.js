import React from 'react';
import {
  withStyles,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
} from '@material-ui/core';
import styles from './styles';
import inflection from 'inflection';
import { EditButton } from 'react-admin';
import LinkToRelatedProducts from './field/LinkToRelatedProducts';

const ImageGird = ({ classes, ...props }) => {
  const { data, ids } = props;
  return ids ? (
    <Grid container spacing={2} className={classes.root}>
      {ids.map(id => {
        return (
          <Grid key={id} xs={12} sm={6} md={4} lg={3} xl={2} item>
            <Card>
              <CardMedia
                image={`${data[id].image}`}
                className={classes.media}
              />
              <CardContent className={classes.title}>
                <Typography
                  variant="h5"
                  component="h2"
                  align="center"
                >
                  {inflection.humanize(data[id].name)}
                </Typography>
              </CardContent>
              <CardActions
                classes={{ spacing: classes.actionSpacer }}
              >
                <LinkToRelatedProducts record={data[id]} />
                <EditButton
                  basePath="/categories"
                  record={data[id]}
                />
              </CardActions>
            </Card>
          </Grid>
        )
      })}
    </Grid>
  ) : null
};

export default withStyles(styles)(ImageGird);