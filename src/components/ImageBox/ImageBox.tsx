import * as React from 'react';
import style from './style.module.scss';

type TProps = {
  src: string;
  name: string;
}

export const ImageBox: React.FC<TProps> = props => (
  <div className={ style.container }>
    <img className={ style.img } src={ props.src } alt={ props.name } />
  </div>
);
