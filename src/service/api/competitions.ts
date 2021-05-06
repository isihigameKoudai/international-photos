import { AxiosPromise } from "axios";
import { api } from "@/utils/api";

export type Competition = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
  awards: string;
  deadline: string;
  link: string;
  tileStyle: string;
};

export type CompetitionResponse = {
  contents: Competition[];
};

export const fetchCompetitions = (): AxiosPromise<CompetitionResponse> =>
  api.get("/competitions?limit=100");
