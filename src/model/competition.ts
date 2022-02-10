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
  tileStyle?: "red" | "black" | "white";
};
