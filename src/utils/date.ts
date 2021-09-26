import format from "date-fns/format";

export const fetchToday = (): string => format(new Date(), "yyyyMMdd");
