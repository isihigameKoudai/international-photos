import React from "react";
import Image from "next/image";
import { css } from "@emotion/css";

import TitleBanner from '@/assets/svg/title.svg';
import style from '@/assets/style/layout.module.scss';

const headerStyle = css`
  background-color: #010101;
  text-align: center;
  padding: 14px 0;
`;

const Header: React.FC = () => {
  return (
    <header className={headerStyle}>
      <div className={style.container}>
        <Image src={TitleBanner.src} width={TitleBanner.width} height={TitleBanner.height} />
      </div>
    </header>
    )
};

export default Header;
