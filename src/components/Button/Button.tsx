import * as React from 'react';

import style from './style.module.scss'

type Props = {
  title: string;
  onClick: Function;
}

export const Button: React.FC<Props> = ({ title, onClick }) => (
  <button className={style.button} onClick={() => onClick()}>{ title }</button>
)
