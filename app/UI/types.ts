import { IMenuItems } from "./../components/Navigation/Menu/MenuInterface";
export type TypeGenre =
  | "Detective"
  | "Novel"
  | "Adventure"
  | "Thriller"
  | "Fantasy"
  | "Science-fiction"
  | "Non—fiction";

export interface IData {
  day: string | null;
  month: string | null;
  year: string | null;
}
export interface IBook {
  title: string;
  author: string;
  rating: number;
  genre: TypeGenre;
  poster: string;
  description: string;
  _id: string;
}

export interface IAuthor {
  nameAuthor: string;
  country: string;
  _id: string;
  DateOfBirth: string;
  BooksWritten: IBook[];
  avatar: string;
}

export interface IUser {
  _id: string;
  email: string;
  password: string;
  isAdmin: boolean;
  avatar?: string;
  favoriteBooks: string[];
}

export interface IRequest {
  search?: string;
  id_ne?: string;
  page?: number;
  limit?: number;
}

export interface ITrendingResponse {
  description: string;
  PopularBooks: IBook[];
}

export interface IUploadsFiles {
  url: string;
  name: string;
}
