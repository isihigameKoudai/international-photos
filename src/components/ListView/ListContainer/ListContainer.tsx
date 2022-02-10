import * as React from 'react';
import { memo, ReactNode } from 'react';

import style from './style.module.scss';

type Props = {
  className?: string;
  children: ReactNode;
}

const ListContainer = memo<Props>(({ children, className = '' }) => (
  <ul className={`${style.ListContainer} ${className}`}>{
    children
  }</ul>
));

export default ListContainer;
