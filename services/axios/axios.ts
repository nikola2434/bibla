import { IAuthResponse } from "../../store/user/userInterface";
import { IAuthor, IBook, ITrendingResponse } from "../../app/UI/types";
import axios from "axios";
import { IMenuItems } from "../../app/components/Navigation/Menu/MenuInterface";

export const classicAxios = axios.create({
  baseURL: "http://localhost:5000/api/",
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
  async getBook(id: string) {
    return classicAxios
      .get<IBook>(`books/byId/${id}`)
      .then((response) => response.data);
  },
  async getBooks() {
    return classicAxios
      .get<IBook[]>(`books/allBooks`)
      .then((response) => response.data);
  },
};

export const axiosGenreApi = {
  async getGenre(slug: string) {
    return classicAxios
      .get<IMenuItems>(`genre/byId/${slug}`)
      .then((response) => response.data);
  },
  async getGenres() {
    return classicAxios
      .get<IMenuItems[]>("genre/allGenres")
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
      .get<IAuthor>(`authors/${id}`)
      .then((response) => response.data);
  },

  async getAuthors() {
    return classicAxios
      .get<IAuthor[]>("authors")
      .then((response) => response.data);
  },
  async getAuthorByTitle(title: string) {
    return classicAxios
      .get<IAuthor[]>(`author?q=${title}`)
      .then((response) => response.data[0]);
  },
};
