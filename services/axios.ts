import { IAuthResponse } from "./../store/user/userInterface";
import { IAuthor, IBook, ITrendingResponse } from "./../app/UI/types";
import axios from "axios";
import { IMenuItems } from "../app/components/Navigation/Menu/MenuInterface";

export const classicAxios = axios.create({
  baseURL: "http://localhost:3001/",
});

export const getContentType = () => {
  return { "Content-Type": "application/json" };
};

export const PopularBooksApi = {
  async getPopularBooks() {
    return classicAxios.get<ITrendingResponse>("trending").then((response) => {
      return {
        description: response.data.description,
        PopularBooks: response.data.PopularBooks,
      } as ITrendingResponse;
    });
  },
};

export const axiocBookApi = {
  async getBooksId(id: string[]) {
    return classicAxios
      .get<IBook[]>("books")
      .then((response) => response.data.filter((book) => id.includes(book.id)));
  },
  async getBook(id: string) {
    return classicAxios
      .get<IBook>(`books/${id}`)
      .then((response) => response.data);
  },
  async getBooks() {
    return classicAxios.get<IBook[]>(`books`).then((response) => response.data);
  },
};

export const axiosGenreApi = {
  async getGenre(slug: string) {
    return classicAxios
      .get<IMenuItems[]>(`bookGenres?q=${slug}`)
      .then((response) => response.data[0]);
  },
  async getGenres() {
    return classicAxios
      .get<IMenuItems[]>("bookGenres")
      .then((response) => response.data);
  },
};

export const axiosUserApi = {
  async getByIdUser(id: string) {
    return classicAxios
      .get<IAuthResponse>(`users/${id}`)
      .then((response) => response.data);
  },
};

export const axiosAuthorApi = {
  async getAuthor(id: string) {
    return classicAxios
      .get<IAuthor>(`author/${id}`)
      .then((response) => response.data);
  },

  async getAuthors() {
    return classicAxios
      .get<IAuthor[]>("author")
      .then((response) => response.data);
  },
  async getAuthorByTitle(title: string) {
    return classicAxios
      .get<IAuthor[]>(`author?q=${title}`)
      .then((response) => response.data[0]);
  },
};
