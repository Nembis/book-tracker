import { isAxiosError } from "axios";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import { createNewUser } from "../../http-requests/user.request";
import { Button } from "../button/button.component";
import { FormWrapper } from "../form-wrapper/form-wrapper.component";
import { H2 } from "../header/h2.component";
import { Input } from "../input/input.component";

interface CreateUserFormProps {}

export const CreateUserForm: FC<CreateUserFormProps> = ({}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(() => e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(() => e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await createNewUser(email, password);
      alert("New User has been created.");
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
      <H2 text="Create New User" />

      <Input
        type="email"
        placeholder="Email"
        onChange={handleEmailChange}
        value={email}
        required={true}
      />

      <Input
        type="password"
        placeholder="Password"
        onChange={handlePasswordChange}
        value={password}
        required={true}
      />

      <Button type="submit" text="Create New User" color="blue" />
    </FormWrapper>
  );
};
