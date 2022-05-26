import * as React from 'react';
import { memo, ReactNode } from 'react';
import { css } from '@emotion/css';

type Props = {
  className?: string;
  children: ReactNode;
}

const style = css`
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListContainer = memo<Props>(({ children, className = '' }) => (
  <ul className={`${style} ${className}`}>{
    children
  }</ul>
));

export default ListContainer;
