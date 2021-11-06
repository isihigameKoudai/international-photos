import { css } from "@emotion/css";

export const ListItemStyle = css`
  width: 100%;
  padding: 16px 12px;
  list-style: none;
  box-sizing: border-box;
  background: #fff;
  transition-duration: 0.3s;
  font-family: "Yu Mincho", YuMincho, "Hiragino Minchō Pro",
    "Hiragino Mincho Pro", serif;
  border-bottom: solid 1px #ccc;

  &:nth-child(even) {
    background: #fafafc;
  }

  a {
    text-decoration: none;
    color: #222;
  }

  .name {
    font-weight: bold;
    font-size: 18px;
    letter-spacing: 0.5px;
  }

  .awards {
    font-size: 18px;
  }

  .deadline {
    font-size: 16px;
    &.has-deadline {
      font-size: 18px;
      font-weight: bold;
      color: #ee0000;
    }
  }

  &:hover {
    background: #ececec;
  }
`;
