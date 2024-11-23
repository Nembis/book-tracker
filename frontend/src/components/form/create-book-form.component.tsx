import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import { FormWrapper } from "../form-wrapper/form-wrapper.component";
import { H2 } from "../header/h2.component";
import { Input } from "../input/input.component";
import { Select, SelectOption } from "../input/select.component";
import { Button } from "../button/button.component";
import { getAllAuthors } from "../../http-requests/user.request";
import { createNewBook } from "../../http-requests/book.request";

interface CreateBookFormProps {}

export const CreateBookForm: FC<CreateBookFormProps> = () => {
  const [authorOptions, setAuthorOptions] = useState<SelectOption[]>([]);
  const [authorId, setAuthorId] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isbnNumber, setIsbnNumber] = useState("");

  const handleAuthorIdChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setAuthorId(() => Number.parseInt(e.target.value));
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(() => e.target.value);
  };

  const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(() => e.target.value);
  };

  const handleIsbnNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsbnNumber(() => e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await createNewBook({
        authoerId: authorId,
        title: title,
        description: description,
        isbnNumber: isbnNumber,
      });

      alert("New book created");
      setTitle(() => "");
      setDescription(() => "");
      setIsbnNumber(() => "");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const init = async () => {
      try {
        const res = await getAllAuthors();
        setAuthorOptions(() =>
          res.data.map(({ firstName, lastName, authorId }) => ({
            display: `${firstName} ${lastName}`,
            value: authorId,
          }))
        );
      } catch (err) {
        console.log(err);
      }
    };

    init();
  }, []);

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <H2 text="Create New Book" />

      <Select options={authorOptions} onChange={handleAuthorIdChange} />

      <Input
        type="text"
        placeholder="Book Title"
        required={true}
        onChange={handleTitleChange}
        value={title}
      />

      <Input
        type="text"
        placeholder="Book Description"
        required={false}
        onChange={handleDescriptionChange}
        value={description}
      />

      <Input
        type="text"
        placeholder="Book ISBN Number"
        required={false}
        onChange={handleIsbnNumberChange}
        value={isbnNumber}
      />

      <Button type="submit" color="blue" text="Create New Book" />
    </FormWrapper>
  );
};
