import * as React from 'react';
import { memo } from 'react';

import Tile from './Tile';

import { Competition } from '@/model/competition';
import style from "@/assets/style/layout.module.scss";

type Props = {
  competitions: Competition[];
}

const TileView = memo<Props>(({ competitions }) => (
  <div className={style.top}>
    {
      competitions.map((item, index) => (
        <Tile
          key={`tile-${index}`}
          name={item.name}
          awards={item.awards}
          deadline={ item.deadline }
          link={item.link}
          tileStyle={item.tileStyle}
        />
      ))
    }
  </div>
));

export default TileView;
