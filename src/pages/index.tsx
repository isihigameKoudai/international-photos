import * as React from 'react';
import { NextPage, GetStaticProps } from 'next'
import clone from 'rfdc';

import style from '@/assets/style/layout.module.scss';

import Tile from '@/components/Tile';
import ImageBox from '@/components/ImageBox';
import sitePc from '@/assets/json/sitePc.json';

import image1 from '@/assets//img/image1.jpg';

const IndexPage: NextPage<any> = props => {
  const { sitePc } = props;

  return (
    <div id="top" className={style.container}>
      { sitePc.map((item, index) => {
        if (item.deadline !== undefined) return <Tile key={index} name={item.name} awards={item.awards} deadline={item.deadline} link={item.link} tileStyle={item.tileStyle} />

        return <ImageBox key={index} src={item.src} name={item.name} />
      })}
    </div>
  )
}

const deepCopy = clone();
type TSite = {
  name: string;
  award: string;
  deadline: string;
  tileStyle: 'red' | 'black' | 'white';
}

type TImage = {
  src: string;
  name: string;
}

type TList = TSite | TImage

export const getStaticProps: GetStaticProps = async () => {
  const splicedSitePc: TList[] = deepCopy(sitePc.sites);
  const imageList: TImage[] = [{
    src: image1,
    name: 'image1'
  },{
    src: image1,
    name: 'image1'
  },{
    src: image1,
    name: 'image1'
  }]

  const arr: number[] = [1, 8, 12];
  arr.map((num, i) => {
    console.log(num, i);
    splicedSitePc.splice(num, 0, imageList[i])
  });

  const props: object = { sitePc: splicedSitePc };
  return { props };
}

export default IndexPage;
