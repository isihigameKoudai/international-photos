import * as React from 'react';
import { NextPage, GetStaticProps } from 'next'
import clone from 'rfdc';

import style from '@/assets/style/layout.module.scss';

import Tile from '@/components/Tile';
import ImageBox from '@/components/ImageBox';
import sitePc from '@/assets/json/sitePc.json';

const IndexPage: NextPage = props => {
  const { sitePc } = props;
  console.log(props, sitePc);

  return (
    <div id="top" className={style.container}>
      { sitePc.map(item => {
        if (item.name) return <Tile name={item.name} awards={item.awards} deadline={item.deadline} link={item.link} tileStyle={item.tileStyle} />

        return <ImageBox className="hello" />
      })}
    </div>
  )
}

const deepCopy = clone();

export const getStaticProps: GetStaticProps = async () => {
  const splicedSitePc = deepCopy(sitePc.sites);

  // レイアウトのため空白のタイル部分を入れる
  [1, 8, 12].forEach(num => {
    splicedSitePc.splice(num, 0, {})
  })

  const props: object = { sitePc: splicedSitePc };
  return { props };
}

export default IndexPage;
