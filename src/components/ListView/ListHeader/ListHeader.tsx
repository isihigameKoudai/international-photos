import * as React from 'react';
import { memo } from 'react';
import Grid from '@material-ui/core/Grid';

import style from './style.module.scss';

type Props = {
  className?: string;
}

const ListHeader = memo<Props>(({ className = '' }) => (
  <header className={`${style.ListHeader} ${className}`}>
    <Grid className={className} container justifyContent="space-between" alignItems="center">
      <Grid item xs={4}>Site Name</Grid>
      <Grid item xs={4}>Competition Name</Grid>
      <Grid item xs={4}>Deadline</Grid>
    </Grid>
  </header>
));

export default ListHeader;
