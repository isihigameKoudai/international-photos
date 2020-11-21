import React, { useCallback } from 'react';
import { NextPage, GetStaticProps } from 'next';
import clone from 'rfdc';

import style from '@/assets/style/layout.module.scss';

import Tile from '@/components/Tile';
import ImageBox from '@/components/ImageBox';
import Button from '@/components/Button';
import sitePc from '@/assets/json/sitePc.json';
import { useEffect } from 'react';

const IndexPage: NextPage<any> = props => {
  const { sitePc } = props;

  let installPrompt: BeforeInstallPromptEvent | null = null
  useEffect(() => {
    window.addEventListener('beforeinstallprompt', e => {
      e.preventDefault();
      installPrompt = e;
    })
  }, []);

  const addHome = useCallback(() => {
    console.log('button', installPrompt);

    if (!installPrompt) return;
    installPrompt.userChoice.then((choice) => {
      console.log(choice);

      if (choice.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }

      installPrompt = null;
    });
  }, [])

  return (
    <div id="top" className={style.container}>
      { sitePc.map((item, index) => {
        if (item.deadline !== undefined) return <Tile key={index} name={item.name} awards={item.awards} deadline={item.deadline} link={item.link} tileStyle={item.tileStyle} />

        return <ImageBox key={index} src={item.src} name={item.name} />
      })}
      <Button title='button' onClick={addHome} />
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
  }]

  const arr: number[] = [1, 8, 12];
  arr.map((num, i) => {
    splicedSitePc.splice(num, 0, imageList[i])
  });

  const props: object = { sitePc: splicedSitePc };
  return { props };
}

export default IndexPage;
