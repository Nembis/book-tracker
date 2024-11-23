import { FC, useEffect, useState } from "react";
import {
  getAllAuthors,
  getAuthorBooks,
} from "../../http-requests/user.request";
import { IAuthor } from "../../refs/constants.ref";

interface DisplayAuthorsProps {}

export const DisplayAuthors: FC<DisplayAuthorsProps> = () => {
  const [authors, setAuthors] = useState<IAuthor[]>([]);

  const loadAuthors = async () => {
    try {
      const res = await getAllAuthors();
      console.log(res.data);
      setAuthors(() => res.data);
    } catch (err) {
      console.log("Error failed to load users: ", err);
    }
  };

  useEffect(() => {
    loadAuthors();
  }, []);

  return (
    <>
      {authors.map((author) => {
        const getBooks = async () => {
          console.log((await getAuthorBooks(author.authorId)).data);
        };

        return (
          <div
            key={author.authorId}
            className="grid grid-cols-5 border border-gray-700 rounded-md p-2 hover:cursor-pointer"
            onClick={getBooks}
          >
            <p className="col-span-4">
              <span className="underline">First Name: {author.firstName}</span>
              <br />
              <span className="underline">Last Name: {author.lastName}</span>
            </p>
          </div>
        );
      })}
    </>
  );
};
