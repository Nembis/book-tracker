import { ChangeEvent, FC, FormEvent, useState } from "react";
import { FormWrapper } from "../form-wrapper/form-wrapper.component";
import { H2 } from "../header/h2.component";
import { Input } from "../input/input.component";
import { Button } from "../button/button.component";
import { createNewAuthor } from "../../http-requests/user.request";
import { isAxiosError } from "axios";

interface CreateAuthorFormProps {}

export const CreateAuthorForm: FC<CreateAuthorFormProps> = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleFirstNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFirstName(() => e.target.value);
  };

  const handleLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(() => e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await createNewAuthor(firstName, lastName);
      alert("Author created!");
    } catch (err) {
      if (isAxiosError(err)) {
        console.log("Axios Error Message: ", err.message);
        return;
      }
      console.log("Error: ", err);
    }
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <H2 text="Create New Author" />

      <Input
        type="text"
        placeholder="First Name"
        required={true}
        onChange={handleFirstNameChange}
        value={firstName}
      />

      <Input
        type="text"
        placeholder="Last Name"
        required={true}
        onChange={handleLastNameChange}
        value={lastName}
      />

      <Button type="submit" text="Create New Author" color="blue" />
    </FormWrapper>
  );
};
