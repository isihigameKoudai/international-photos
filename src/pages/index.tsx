import * as React from 'react';
import { NextPage, GetStaticProps } from 'next'
import clone from 'rfdc';

import style from '@/assets/style/layout.module.scss';

import Tile from '@/components/Tile';
import ImageBox from '@/components/ImageBox';
import sitePc from '@/assets/json/sitePc.json';

const IndexPage: NextPage<any> = props => {
  const { sitePc } = props;

  return (
    <div id="top">
      <main className={`${style.container} ${style.top}`}>
        { sitePc.map((item, index) => {
          if (item.deadline !== undefined) return <Tile key={index} name={item.name} awards={item.awards} deadline={item.deadline} link={item.link} tileStyle={item.tileStyle} />

          return <ImageBox key={index} src={item.src} name={item.name} />
        })}
      </main>
      <footer className={`${style.container} ${style.footer} ${style.footerTop}`}>
        <a href="//twitter.com/share" className="twitter-share-button" data-text="" data-url="" data-lang="ja">Tweet</a>
        <a href="//twitter.com/share" className="twitter-share-button" data-text="" data-url="" data-lang="ja">Tweet</a>
      </footer>
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
    src: '/image1.jpg',
    name: 'image1',
  },{
    src: '/image2.jpeg',
    name: 'image2'
  },{
    src: '/image3.jpeg',
    name: 'image3'
  },{
    src: '/image4.JPG',
    name: 'image4'
  },{
    src: '/image5.JPG',
    name: 'image5'
  }]

  const arr: number[] = [1, 8, 12, 20, 25];
  arr.map((num, i) => {
    splicedSitePc.splice(num, 0, imageList[i])
  });

  const props: object = { sitePc: splicedSitePc };
  return { props };
}

export default IndexPage;
