import * as React from 'react';
import { memo } from 'react';
import { css } from '@emotion/css';

import Tile from './Tile';
import Competition from '@/model/competition';

type Props = {
  competitions: Competition[];
}

const style = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;

  padding: 60px 0 30px;

  @media screen and (max-width: 768px) {
    display: block;
  }

`;

const TileView = memo<Props>(({ competitions }) => (
  <div className={style}>
    {
      competitions.map((item, index) => (
        <Tile
          competition={item}
          key={`tile-${index}`}
        />
      ))
    }
  </div>
));

export default TileView;
