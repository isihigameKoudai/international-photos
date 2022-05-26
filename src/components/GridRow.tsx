import React from "react";
import { css } from "@emotion/css";

const defaultGridTemplateColumns = `1fr 1fr 1fr`;

export const gridStyle = (gridColumns = defaultGridTemplateColumns) => css`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: ${gridColumns};
  background: transparent;
`;

export type GridRowProps = {
  gridColumn?: string
  children: React.ReactNode
  className?: string;
  tag?: React.ElementType
}

const GridRow: React.FC<GridRowProps> = ({ gridColumn, children, className,　tag: Tag = 'div' }) => (
  <Tag className={ `${className} ${gridStyle(gridColumn)}` }>
    { children }
  </Tag>
);

export default GridRow;
