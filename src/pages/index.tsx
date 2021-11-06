import * as React from "react";
import { useState, useCallback } from 'react';
import { NextPage, GetStaticProps } from "next";
import clone from "rfdc";
import { AxiosResponse } from "axios";
import { fetchToday } from "@/utils/date";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ArticleIcon from '@mui/icons-material/Article';
import Grid from '@material-ui/core/Grid'

import style from "@/assets/style/layout.module.scss";
import indexStyle from "@/assets/style/indexPage.module.scss";

import Tile from "@/components/Tile";
import SectionTitle from "@/components/SectionTitle";
import ScrollIndicator from "@/components/ScrollIndicator";
import ListContainer from "~/components/ListContainer";
import ListHeader from "~/components/ListHeader";
import ListItem from '@/components/ListItem';

import { fetchCompetitions, CompetitionResponse, Competition } from '@/service/api/competitions'

type PageProps = {
  siteList: Competition[]
}

type ShowMode = 'list' | 'tile';

const IndexPage: NextPage<PageProps> = (props) => {
  const { siteList } = props;
  const [showMode, setShowMode] = useState<ShowMode>('list')

  const onChangeShowMode = useCallback((event: MouseEvent<HTMLElement, MouseEvent>, mode: ShowMode) => {
    setShowMode(mode)
  },[])

  const onClickScroll = () => {
    const $top = document.querySelector(".top");
    const { height } = $top.getBoundingClientRect();

    window.scroll({
      top: height,
      behavior: "smooth",
    });
  };
  const today: string = fetchToday()
  const isShowEmptyMessage = (deadline: string | null | undefined ): boolean => {
    const isEmpty = !deadline
    const isPast = today > deadline
    return  isEmpty || isPast
  }

  const competitions = siteList.map(competition => {
    competition.deadline = isShowEmptyMessage(competition.deadline) ? 'Will be coming!' : competition.deadline
    return competition
  })

  return (
    <div id="top">
      <div className={`${indexStyle.hero} top`}>
        <div
          className={`${style.container}`}
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <img src="/title.png" alt="tile" width="350" />
        </div>
        <ScrollIndicator onClickScroll={onClickScroll} />
      </div>

      <main className={style.container} style={{ marginTop: 52 }}>
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
          showMode === 'list' && (
            <>
            <ListHeader className={indexStyle.ListHeader} />
            <ListContainer>
              {
                competitions.map((item: Competition, i) => (
                  <ListItem competition={item} />
                ))
              }
            </ListContainer>
            </>
          )
        }
        {
          showMode === 'tile' && (
            <div className={style.top}>
              {
                siteList.map((item: Competition, index) => (
                  <Tile
                    key={index}
                    name={item.name}
                    awards={item.awards}
                    deadline={ item.deadline }
                    link={item.link}
                    tileStyle={item.tileStyle}
                  />
                ))
              }
            </div>
          )
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
          © 2020~2021 Bright and dizain
        </div>
      </footer>
    </div>
  );
};


export const getStaticProps: GetStaticProps = async () => {

  const { data } = await fetchCompetitions().catch(e => {
    console.log(e);
  }) as AxiosResponse<CompetitionResponse>

  const deepCopy = clone();
  const splicedSitePc: Competition[] = deepCopy(data.contents);

  const props: PageProps = { siteList: splicedSitePc };
  return { props };
};

export default IndexPage;
