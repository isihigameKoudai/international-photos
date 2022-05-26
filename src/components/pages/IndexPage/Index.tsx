import * as React from 'react';
import { useState, useCallback, memo } from 'react';
import Image from 'next/image';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ArticleIcon from '@mui/icons-material/Article';
import Grid from '@material-ui/core/Grid';


import Competition, { CompetitionProps } from '@/model/competition';

import SectionTitle from "@/components/SectionTitle";
import Header from '@/components/Header';
import ListView from '../../ListView';
import TileView from '../../TileView';

import indexStyle from "@/assets/style/indexPage.module.scss";
import style from '@/assets/style/layout.module.scss';

export type Props = {
  competitionList: CompetitionProps[];
}

type ShowMode = 'list' | 'tile';

const Index = memo<Props>(({ competitionList }) => {
  const [showMode, setShowMode] = useState<ShowMode>('list')
  const onChangeShowMode = useCallback((event, mode) => {
    setShowMode(mode)
  },[])

  const competitions = competitionList.map(competition => new Competition(competition));

  return (
    <div id="top">
      <Header />
      <main className={style.container} style={{ marginTop: 52 }}>
        {/* <SectionTitle title="Nearing the deadline" /> */}
        <SectionTitle title="Competitions" />
        <Grid
          className={indexStyle.ToggleContainer}
          container
          justifyContent="center"
          alignItems="center"
        >
          <ToggleButtonGroup
            value={showMode}
            onChange={onChangeShowMode}
            exclusive
            aria-label="ui-mode"
          >
            <ToggleButton value="list">
              <FormatListBulletedIcon />
            </ToggleButton>
            <ToggleButton value="tile">
              <ArticleIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>
        {
          showMode === 'list' && <ListView competitions={competitions} />
        }
        {
          showMode === 'tile' && <TileView competitions={competitions} />
        }
      </main>
      <footer
        className={`${style.container}`}
        style={{ padding: "60px 0 30px" }}
      >
        <SectionTitle title="share" />
        <div className={`${style.flexContainer} ${style.containerInner}`}>
          <a
            href="//twitter.com/share"
            className="twitter-share-button item"
            data-text="海外の国際的な写真コンテストの締め切りがまとめて見れるInternational-photos"
            data-url="https://international-photos.vercel.app/"
            data-lang="ja"
          >
            Tweet
          </a>
          <div
            className="fb-share-button item"
            data-href="https://international-photos.vercel.app/"
            data-layout="button"
            data-size="large"
          >
            <a
              target="_blank"
              href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Finternational-photos.vercel.app%2F&amp;src=sdkpreparse"
              className="fb-xfbml-parse-ignore"
            >
              シェア
            </a>
          </div>
        </div>
        <SectionTitle title="contact" />
        <div className={`${style.containerInner} ${style.flexContainer}`}>
          <a
            href="https://twitter.com/TVK382"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={indexStyle.icon}
              src="/LogoTwitter.png"
              alt="contact:twitter"
              loading="lazy"
            />
          </a>
          <a
            href="https://www.instagram.com/koudai_ishigame/?hl=ja"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={indexStyle.icon}
              src="/LogoInstagram.png"
              alt="contact:instagram"
              loading="lazy"
            />
          </a>
          <a
            href="https://www.brightanddizain.com/contact"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={indexStyle.icon}
              src="/bnd.png"
              alt="contact:twitter"
              loading="lazy"
            />
          </a>
        </div>
        <div
          style={{
            textAlign: "center",
            padding: "10px 0",
            fontFamily: `"Yu Mincho", YuMincho, "Hiragino Minchō Pro", "Hiragino Mincho Pro", serif`,
          }}
        >
          © 2020~2022 Bright and dizain
        </div>
      </footer>
    </div>
  )
});

export default Index;
