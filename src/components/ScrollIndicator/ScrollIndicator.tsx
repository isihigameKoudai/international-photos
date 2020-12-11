import { type } from "os";
import * as React from "react";
import style from "./style.module.scss";

type Props = {
  onClickScroll: Function;
};

export const ScrollIndicator: React.FC<Props> = (props: Props) => (
  <button className={style.ScrollIndicator}>
    <span>
      <a href="#images" onClick={() => props.onClickScroll()}>
        SCROLL
      </a>
    </span>
  </button>
);
