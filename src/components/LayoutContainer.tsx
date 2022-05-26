import React from "react";
import { css } from "@emotion/css";

const defaultContainerWidth = 1080;

export type LayoutContainerProps = {
  width?: number;
  children: React.ReactNode
  className?: string;
  tag?: React.ElementType
  style?: React.CSSProperties
}

export const LayoutContainerStyle = (width: number) => css`
  width: ${width}px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const LayoutContainer: React.FC<LayoutContainerProps> = ({ width = defaultContainerWidth, children, className = '', tag: Tag = 'div', style = {} }) => (
  <Tag className={ `${className} ${ LayoutContainerStyle(width)}` } style={style}>
    { children }
  </Tag>
);

export default LayoutContainer;
