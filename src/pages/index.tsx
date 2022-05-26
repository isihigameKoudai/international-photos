import * as React from "react";
import { NextPage, GetStaticProps } from "next";

import Index, { Props }from '@/components/pages/Index';
import { fetchCompetitions } from '@/service/api/competitions'

const IndexPage: NextPage<Props> = (props) => {
  return <Index {...props} />
};

export const getStaticProps: GetStaticProps = async () => {

  const { data } = await fetchCompetitions().catch(e => {
    console.error(e);
    throw e;
  });
  const props: Props = { competitionList: data.contents };

  return {
    props,
  }
};

export default IndexPage;
