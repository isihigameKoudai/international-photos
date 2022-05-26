import { AxiosPromise } from "axios";
import { api } from "@/utils/api";
import { CompetitionProps } from "@/model/competition";

export type CompetitionResponse = {
  contents: CompetitionProps[];
};

export const fetchCompetitions = (): AxiosPromise<CompetitionResponse> =>
  api.get("/competitions?limit=100");
