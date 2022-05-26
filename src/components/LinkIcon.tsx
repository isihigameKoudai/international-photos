import { AnchorHTMLAttributes } from 'react';
import Image, { ImageProps } from 'next/image';
import { css } from '@emotion/css';

type Props = ImageProps & {
  href: AnchorHTMLAttributes<HTMLAnchorElement>['href'];
};

const style = css`
  width: 48px;
  height: auto;
  transition-duration: 0.3s;
  border-radius: 8px;
  overflow: hidden;

  &:hover {
    box-shadow: 3px 3px 4px #aaa;
  }
`;

const LinkIcon: React.FC<Props> = ({ href, src, alt }) => (
  <a
    href="https://twitter.com/TVK382"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Image
      className={style}
      src={src}
      alt={alt}
      loading="lazy"
      decoding='async'
      width={48}
      height={48}
    />
  </a>
);

export default LinkIcon;
