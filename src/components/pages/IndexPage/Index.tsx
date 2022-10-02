import * as React from 'react';
import { useState, useCallback, memo } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ArticleIcon from '@mui/icons-material/Article';
import Grid from '@material-ui/core/Grid';

import Competition, { CompetitionProps } from '@/model/competition';
import SectionTitle from "@/components/SectionTitle";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ListView from '@/components/ListView';
import TileView from '@/components/TileView';
import LayoutContainer from '@/components/LayoutContainer';
import LinkIcon from '@/components/LinkIcon';

import { style } from './style';
import { socialMedeias } from '@/config/contents';

export type Props = {
  competitionList: CompetitionProps[];
}

type ShowMode = 'list' | 'tile';

const Index = memo<Props>(({ competitionList }) => {
  const [showMode, setShowMode] = useState<ShowMode>('list')
  const onChangeShowMode = useCallback((event: React.MouseEvent<HTMLElement>, mode) => {
    if(!mode) {
      return;
    }
    setShowMode(mode)
  },[])

  const competitions = competitionList.map(competition => new Competition(competition));
  const willClosingSoonCompetition = competitions.filter(competition => competition.willCloseSoon);

  return (
    <div id="top" className={style}>
      <Header />
      <main style={{ marginTop: 52 }}>
        <LayoutContainer>
          <SectionTitle title="Closing Soon" />
          <ListView className='inner' competitions={willClosingSoonCompetition} />
        </LayoutContainer>
        <LayoutContainer>
          <SectionTitle title="All Competitions" />
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            style={{
              padding: '24px 0 0',
            }}
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
            showMode === 'list' && <ListView className='inner' competitions={competitions} />
          }
          {
            showMode === 'tile' && <TileView competitions={competitions} />
          }
        </LayoutContainer>
      </main>
      <LayoutContainer
        style={{
          padding: '60px 0 0',
        }}
      >
          <SectionTitle title="share" />
          <div className="inner inner-flex">
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
        </LayoutContainer>
        <LayoutContainer>
          <SectionTitle title="contact" />
          <div className="inner inner-flex">
            {
              socialMedeias.map((media,i) => (
                <LinkIcon
                  key={`media-icon-${i}`}
                  href={media.url}
                  src={media.src}
                  alt={media.alt}
                />
              ))
            }
          </div>
        </LayoutContainer>
      <Footer />
    </div>
  )
});

export default Index;
