import { AxiosPromise } from "axios";
import { api } from "@/utils/api";
import { Competition } from "@/model/competition";

export type CompetitionResponse = {
  contents: Competition[];
};

export const fetchCompetitions = (): AxiosPromise<CompetitionResponse> =>
  api.get("/competitions?limit=100");
