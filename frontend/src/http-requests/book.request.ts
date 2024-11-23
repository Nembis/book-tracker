import axios, { AxiosResponse } from "axios";
import { IBook } from "../refs/constants.ref";

const baseAxios = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

type TCreateBookResponse = AxiosResponse<null, any>;

interface ICreateBookParams {
  authoerId: number;
  title: string;
  description?: string;
  isbnNumber?: string;
}

export const createNewBook = async (
  params: ICreateBookParams
): Promise<TCreateBookResponse> =>
  await baseAxios.post("api/book", {
    authorId: params.authoerId,
    title: params.title,
    description: params.description,
    isbnNumber: params.isbnNumber,
  });

type TGetAllBooksResponse = AxiosResponse<IBook, any>;

export const getAllBooks = async (): Promise<TGetAllBooksResponse> =>
  await baseAxios.get("api/book");
