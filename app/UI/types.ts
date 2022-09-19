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
  id: string;
}

export interface IAuthor {
  nameAuthor: string;
  country: string;
  id: string;
  DateOfBirth: string;
  BooksWritten: string[];
  avatar: string;
}

export interface IUser {
  _id: string;
  login: string;
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
