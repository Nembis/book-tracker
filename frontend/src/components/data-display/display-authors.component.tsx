import { FC, useEffect, useState } from "react";
import { getAllAuthors } from "../../http-requests/user.request";
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
        return (
          <div
            key={author.authorId}
            className="grid grid-cols-5 border border-gray-700 rounded-md p-2"
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
