export interface IUser {
  userId: number;
  email: string;
  password: string;
  createDate: string;
}

export interface IAuthor {
  authorId: number;
  firstName: string;
  lastName: string;
  createDate: string;
}

export interface IBook {
  bookId: number;
  title: string;
  description: string;
  isbnNumber: string;
  authorId: number;
  createDate: string;
}
