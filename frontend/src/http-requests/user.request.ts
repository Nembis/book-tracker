import axios, { AxiosResponse } from "axios";
import { IAuthor, IBook, IUser } from "../refs/constants.ref";

const baseAxios = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

type TGetAllUsersResponse = AxiosResponse<IUser[], any>;

export const getAllUsers = async (): Promise<TGetAllUsersResponse> =>
  await baseAxios.get("api/users");

type TCreateNewUserResponse = AxiosResponse<null, any>;

export const createNewUser = async (
  email: string,
  password: string
): Promise<TCreateNewUserResponse> =>
  await baseAxios.post("api/user", {
    email: email,
    password: password,
  });

type TDeleteUserResponse = AxiosResponse<null, any>;

export const deleteUser = async (
  userId: number
): Promise<TDeleteUserResponse> => await baseAxios.delete(`api/user/${userId}`);

type TCreateAuthorResponse = AxiosResponse<null, any>;

export const createNewAuthor = async (
  firstName: string,
  lastName: string
): Promise<TCreateAuthorResponse> =>
  await baseAxios.post("api/author", {
    firstName: firstName,
    lastName: lastName,
  });

type TGetAllAuthorsResponse = AxiosResponse<IAuthor[], any>;

export const getAllAuthors = async (): Promise<TGetAllAuthorsResponse> =>
  await baseAxios.get("api/author");

type TGetAuthorBooksResponse = AxiosResponse<IBook[], any>;

export const getAuthorBooks = async (
  authorId: number
): Promise<TGetAuthorBooksResponse> =>
  await baseAxios.get(`api/book/${authorId}`);
