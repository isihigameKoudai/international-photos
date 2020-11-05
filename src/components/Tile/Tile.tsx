import * as React from 'react';
import style from './style.module.scss';

type TProps = {
  name: string;
  title: string | null | undefined;
  deadline: string;
  tileStyle: string | null | undefined;
}

export const Tile: React.FC<TProps> = props => (
  <div className={ `${style.item} ${ props.tileStyle || '' }`}>
    <a className={style.link} href={ props.link } target="_blank" rel="noopener noreferrer">
      <p className={style.name}>{ props.name }</p>
      <p className={style.title}>{ props.awards }</p>
      <p className={style.deadline}>{ props.deadline }</p>
    </a>
  </div>
);
