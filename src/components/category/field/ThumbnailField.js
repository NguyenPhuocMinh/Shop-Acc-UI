import React from 'react';
import { withStyles } from '@material-ui/core';
import styles from '../styles';
import { get } from 'lodash';

const ThumbnailField = ({ classes, record }) => {
    return record ? (
        <img src={get(record, 'category.thumbnail')} className={classes.thumbnail} alt="" />
    ) : null;
};

export default withStyles(styles)(ThumbnailField);
