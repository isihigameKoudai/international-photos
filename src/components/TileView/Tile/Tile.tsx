import * as React from 'react';
import style from './style.module.scss';

import Competition from '@/model/competition';

type Props = {
  competition: Competition;
}

const createColorStyle = (color: Competition['tileStyle']) => {
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

export const Tile: React.FC<Props> = ({ competition }) => (
  <div className={style.item}>
    <a className={`${style.link} ${ createColorStyle(competition.tileStyle)} `} href={ competition.link } target="_blank" rel="noopener noreferrer">
      <p className={style.text}>
          <span className={style.name}>{ competition.name }</span><br/>
          <span className={style.title}>{ competition.awards }</span><br/>
          <span className={style.deadline}>{ competition.deadline }</span>
      </p>
    </a>
  </div>
);
