import React from "react";
import { css } from "@emotion/css";

import style from '@/assets/style/layout.module.scss';

const footerStyle = css`
  background-color: #010101;
  color: #fff;
  text-align: center;
  padding: 14px 0;
  font-family: "Yu Mincho", YuMincho, "Hiragino Minchō Pro", "Hiragino Mincho Pro", serif;
`;

const Header: React.FC = () => (
  <footer className={footerStyle}>
    <div className={style.container}>
      © 2020~2022 Bright and dizain
    </div>
  </footer>
);

export default Header;
