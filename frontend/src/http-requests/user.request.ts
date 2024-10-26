import axios, { AxiosResponse } from "axios";
import { IUser } from "../refs/constants.ref";

const baseAxios = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

type TGetALlUsersResponse = AxiosResponse<IUser[], any>;

export const getAllUsers = async (): Promise<TGetALlUsersResponse> =>
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
