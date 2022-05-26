import * as React from 'react';
import { memo } from 'react';

import ListContainer from "~/components/ListView/ListContainer";
import ListHeader from "~/components/ListView/ListHeader";
import ListItem from '~/components/ListView/ListItem';

import Competition from '@/model/competition';
import indexStyle from "@/assets/style/indexPage.module.scss";

type Props = {
  competitions: Competition[];
}

const ListView = memo<Props>(({ competitions }) => {
  return (
    <div className='list-view'>
      <ListHeader className={indexStyle.ListHeader} />
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
