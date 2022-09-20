import { IBook, IAuthor } from "./../app/UI/types";
import { IMenuItems } from "./../app/components/Navigation/Menu/MenuInterface";
import { IAuthResponse } from "../store/user/userInterface";

export interface IDbServer {
  BookGenres: IMenuItems[];
  books: IBook[];
  author: IAuthor[];
  users: IAuthResponse[];
}
