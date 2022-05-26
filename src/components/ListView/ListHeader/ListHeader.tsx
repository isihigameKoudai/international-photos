import * as React from 'react';
import { memo } from 'react';
import { css } from '@emotion/css';
import GridRow from '@/components/GridRow';

type Props = {
  className?: string;
}

const style = css`
  width: 100%;
  padding: 10px 12px;
  box-sizing: border-box;
  font-family:'メイリオ', 'Meiryo','ＭＳ ゴシック','Hiragino Kaku Gothic ProN','ヒラギノ角ゴ ProN W3',sans-serif;
  letter-spacing: 0.5px;
  color: #222;
  font-weight: bold;
  border-bottom: solid 2px #888;
  background: #fff;
`;

const ListHeader = memo<Props>(({ className = '' }) => (
  <GridRow tag='header' className={`${style} ${className}`}>
    <span>SiteName</span>
    <span>Competition Name</span>
    <span>Deadline</span>
  </GridRow>
));

export default ListHeader;
