import { fetchToday } from "@/utils/date";

type Title = "red" | "black" | "white";

export type CompetitionProps = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
  awards: string;
  deadline: string;
  link: string;
  tileStyle: Title;
};

const today = fetchToday();

export default class Competition {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  revisedAt: Date;
  name: string;
  awards: string;
  deadline: string;
  link: string;
  tileStyle: Title;

  constructor({
    createdAt,
    updatedAt,
    publishedAt,
    revisedAt,
    ...props
  }: CompetitionProps) {
    this.createdAt = new Date(createdAt);
    this.updatedAt = new Date(updatedAt);
    this.publishedAt = new Date(publishedAt);
    this.revisedAt = new Date(revisedAt);
    Object.assign(this, props);
  }

  get isOpen() {
    const hasDeadline: boolean = !!this.deadline;
    return today > this.deadline && hasDeadline;
  }

  get deadlineLabel() {
    return this.isOpen ? this.deadline : "Will be coming!";
  }
}
