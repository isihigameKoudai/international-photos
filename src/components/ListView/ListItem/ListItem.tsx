import * as React from 'react';
import { memo } from 'react';
import Grid from '@material-ui/core/Grid';

import { Competition } from '@/model/competition';
import { ListItemStyle } from './style';

type Props = {
  competition: Competition
  className?: string;
}

const ListItem = memo<Props>(({ className = '', competition }) => (
  <li className={`${ListItemStyle} ${className}`}>
    <a href={competition.link} target="_blank" rel="noopener">
      <Grid
        className={className}
        container
        justifyContent="space-between"
        alignItems="center"
        spacing={1}
      >
        <Grid className="name" item xs={4}>{ competition.name }</Grid>
        <Grid className="awards" item xs={4}>{ competition.awards }</Grid>
        <Grid className={`deadline ${ competition.deadline !== 'Will be coming!' && 'has-deadline' }`} item xs={4}>{ competition.deadline }</Grid>
      </Grid>
    </a>
  </li>
));

export default ListItem;
