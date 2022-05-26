import { differenceInDays, format, isFuture } from "date-fns";
import { divideDate } from "@/utils/date";

const CLOSING_LIMIT_DAY_LENGTH = 20;

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

export default class Competition {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  revisedAt: Date;
  name: string;
  awards: string;
  deadline: Date | null;
  link: string;
  tileStyle: Title;

  constructor({
    createdAt,
    updatedAt,
    publishedAt,
    revisedAt,
    deadline,
    ...props
  }: CompetitionProps) {
    Object.assign(this, props);
    this.createdAt = new Date(createdAt);
    this.updatedAt = new Date(updatedAt);
    this.publishedAt = new Date(publishedAt);
    this.revisedAt = new Date(revisedAt);

    if (!deadline) {
      this.deadline = null;
    } else {
      const { year, month, day } = divideDate(deadline);
      this.deadline = new Date(year, month, day);
    }
  }

  get isOpen() {
    const hasDeadline: boolean = !!this.deadline;
    const isFutureDeadline: boolean = isFuture(this.deadline);
    return isFutureDeadline && hasDeadline;
  }

  get willCloseSoon() {
    const differenceDays = differenceInDays(this.deadline, new Date());
    return 0 < differenceDays && differenceDays < CLOSING_LIMIT_DAY_LENGTH;
  }

  get deadlineLabel() {
    return this.isOpen ? format(this.deadline, "yyyyMMdd") : "Will be coming!";
  }
}
