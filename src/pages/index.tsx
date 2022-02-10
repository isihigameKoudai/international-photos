import * as React from "react";
import { NextPage, GetStaticProps } from "next";
import clone from "rfdc";
import { AxiosResponse } from "axios";

import Index, { Props }from '@/components/pages/Index';

import { fetchCompetitions, CompetitionResponse } from '@/service/api/competitions'
import { Competition } from "~/model/competition";

const IndexPage: NextPage<Props> = (props) => {
  return <Index {...props} />
};

export const getStaticProps: GetStaticProps = async () => {

  const { data } = await fetchCompetitions().catch(e => {
    console.log(e);
  }) as AxiosResponse<CompetitionResponse>

  const deepCopy = clone();
  const splicedSitePc: Competition[] = deepCopy(data.contents);

  const props: Props = { siteList: splicedSitePc };
  return { props };
};

export default IndexPage;
