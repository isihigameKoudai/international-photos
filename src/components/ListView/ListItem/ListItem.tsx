import * as React from 'react';
import { memo } from 'react';

import Competition from '@/model/competition';
import GridRow, { GridRowProps } from '@/components/GridRow';
import { ListItemStyle } from './style';

type Props = {
  competition: Competition
  className?: string;
  gridColumn?: GridRowProps['gridColumn']
}

const ListItem = memo<Props>(({ className = '', gridColumn, competition }) => (
  <li className={`${ListItemStyle} ${className}`}>
    <a href={competition.link} target="_blank" rel="noopener">
      <GridRow gridColumn={gridColumn}>
        <p className='name'>{ competition.name }</p>
        <p className='awards'>{ competition.awards }</p>
        <p className={`deadline ${ competition.isOpen && 'has-deadline' }`}>{ competition.deadlineLabel }</p>
      </GridRow>
    </a>
  </li>
));

export default ListItem;
