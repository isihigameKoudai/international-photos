import React from "react";
import Image from "next/image";
import { css } from "@emotion/css";

import LayoutContainer from "@/components/LayoutContainer";
import TitleBanner from '@/assets/svg/title.svg';

const headerStyle = css`
  background-color: #010101;
  text-align: center;
  padding: 14px 0;
`;

const Header: React.FC = () => (
  <header className={headerStyle}>
    <LayoutContainer>
      <Image src={TitleBanner.src} width={TitleBanner.width} height={TitleBanner.height} loading='lazy' decoding="async" />
    </LayoutContainer>
  </header>
);

export default Header;
