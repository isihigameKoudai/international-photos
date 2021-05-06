import * as React from "react";
import { NextPage, GetStaticProps } from "next";
import clone from "rfdc";
import { AxiosResponse } from "axios";

import style from "@/assets/style/layout.module.scss";
import indexStyle from "@/assets/style/indexPage.module.scss";

import Tile from "@/components/Tile";
import ImageBox from "@/components/ImageBox";
import SectionTitle from "@/components/SectionTitle";
import ScrollIndicator from "@/components/ScrollIndicator";

import { fetchCompetitions, CompetitionResponse } from '@/service/api/competitions'


const IndexPage: NextPage<any> = (props) => {
  const { sitePc } = props;

  const onClickScroll = () => {
    const $top = document.querySelector(".top");
    const { height } = $top.getBoundingClientRect();

    window.scroll({
      top: height,
      behavior: "smooth",
    });
  };

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
        <div className={style.top}>
          {
            sitePc.map((item, index) => {

              if(item.src) return <ImageBox key={index} src={item.src} name={item.name} />;

              return <Tile
                  key={index}
                  name={item.name}
                  awards={item.awards}
                  deadline={item.deadline}
                  link={item.link}
                  tileStyle={item.tileStyle}
                />
            })
          }
        </div>
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

type TImage = {
  src: string;
  name: string;
};

type TList = CompetitionResponse | TImage;

export const getStaticProps: GetStaticProps = async () => {

  const { data } = await fetchCompetitions().catch(e => {
    console.log(e);
  }) as AxiosResponse<CompetitionResponse>

  const deepCopy = clone();
  const splicedSitePc: TList[] = deepCopy(data.contents);
  const imageList: TImage[] = [
    {
      src: "/image1.jpg",
      name: "image1",
    },
    {
      src: "/image2.jpeg",
      name: "image2",
    },
    {
      src: "/image3.jpeg",
      name: "image3",
    },
    {
      src: "/image4.JPG",
      name: "image4",
    },
    {
      src: "/image5.JPG",
      name: "image5",
    },
  ];

  const arr: number[] = [1, 8, 12, 20, 25];
  arr.map((num, i) => {
    splicedSitePc.splice(num, 0, imageList[i]);
  });

  const props: object = { sitePc: splicedSitePc };
  return { props };
};

export default IndexPage;
