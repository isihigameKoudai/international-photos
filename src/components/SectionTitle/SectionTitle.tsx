import React from 'react'
import style from './style.module.scss';

type TProps = {
  title: string;
  className: string | undefined;
}

export const SectionTitle: React.FC<TProps> = (props: TProps) => <h2 className={`${style.SectionTitle} ${props.className}`}>{ props.title }</h2>
