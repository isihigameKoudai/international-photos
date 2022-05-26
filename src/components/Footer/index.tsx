import React from "react";
import { css } from "@emotion/css";

import LayoutContainer from "@/components/LayoutContainer";

const footerStyle = css`
  background-color: #010101;
  color: #fff;
  text-align: center;
  padding: 14px 0;
  font-family: "Yu Mincho", YuMincho, "Hiragino Minchō Pro", "Hiragino Mincho Pro", serif;
`;

const Header: React.FC = () => (
  <footer className={footerStyle}>
    <LayoutContainer>
      © 2020~2022 Bright and dizain
    </LayoutContainer>
  </footer>
);

export default Header;
