import * as React from 'react';
import { memo } from 'react';
import { css } from '@emotion/css';

import Competition from '@/model/competition'
import ListContainer from "~/components/ListView/ListContainer";
import ListHeader from "~/components/ListView/ListHeader";
import ListItem from '~/components/ListView/ListItem';;

type Props = {
  competitions: Competition[];
}

const style = css`
  padding: 24px 0;
`;

const ListView = memo<Props>(({ competitions }) => {
  return (
    <div className={style}>
      <ListHeader />
      <ListContainer>
        {
          competitions.map((item, i) => (
            <ListItem key={`list-${i}`} competition={item} />
          ))
        }
      </ListContainer>
    </div>
  )
});

export default ListView;
