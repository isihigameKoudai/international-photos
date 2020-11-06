import * as React from 'react';
import style from './style.module.scss';

type TProps = {
  name: string;
  title: string | null | undefined;
  deadline: string;
  tileStyle: 'red' | 'black' | 'white' | null | undefined;
}

const createColorStyle = (color: 'red' | 'black' | 'white' | null | undefined) => {
  switch (color) {
    case 'red': {
      return style.red;
    }
    case 'black': {
      return style.black;
    }
    case 'white': {
      return style.white;
    }
    default: {
      return '';
    }
  }
}

export const Tile: React.FC<TProps> = props => (
  <div className={style.item}>
    <a className={`${style.link} ${ createColorStyle(props.tileStyle)} `} href={ props.link } target="_blank" rel="noopener noreferrer">
      <p className={style.text}>
          <span className={style.name}>{ props.name }</span><br/>
          <span className={style.title}>{ props.awards }</span><br/>
          <span className={style.deadline}>deadline : { props.deadline }</span>
      </p>
    </a>
  </div>
);
