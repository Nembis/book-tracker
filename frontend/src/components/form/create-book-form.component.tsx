import { ChangeEvent, FC, useState } from "react";
import { FormWrapper } from "../form-wrapper/form-wrapper.component";
import { H2 } from "../header/h2.component";
import { Input } from "../input/input.component";
import { Select } from "../input/select.component";
import { Button } from "../button/button.component";

interface CreateBookFormProps {}

export const CreateBookForm: FC<CreateBookFormProps> = () => {
  const [authorId, setAuthorId] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isbnNumber, setIsbnNumber] = useState("");

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(() => e.target.value);
  };

  const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(() => e.target.value);
  };

  const handleIsbnNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsbnNumber(() => e.target.value);
  };

  return (
    <FormWrapper>
      <H2 text="Create New Book" />

      <Select
        options={[
          {
            display: "Test 1",
            value: 1,
          },
          {
            display: "Test 2",
            value: 2,
          },
        ]}
        onChange={(e) => console.log(e.target.value)}
      />

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
