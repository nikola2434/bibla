import { IData } from "./../app/UI/types";
export function getDateString(date: IData): string {
  return String(date.day + "." + date.month + "." + date.year);
}

export const getIdAuthor = (slug: string) => {
  return slug.replace(/\s+/g, "");
};
