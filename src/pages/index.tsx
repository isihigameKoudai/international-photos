import * as React from 'react';
import { NextPage, GetStaticProps } from 'next';

import site from '@/assets/json/site.json';

const IndexPage: NextPage = props => {
  console.log(props);
  const { sites } = props;
  return (
    <div id="top">
    { sites.map((item, index) => <div key={index}>{item.name}</div> ) }
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const props: object = { sites: site.sites };
  return { props };
}

export default IndexPage;
