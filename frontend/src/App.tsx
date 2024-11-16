import { useState } from "react";
import { Button } from "./components/button/button.component";
import { DisplayUsers } from "./components/data-display/display-users.component";
import { CreateUserForm } from "./components/form/create-user-form.ccomponent";
import { H1 } from "./components/header/h1.component";
import { CreateAuthorForm } from "./components/form/create-author-form.component";
import { DisplayAuthors } from "./components/data-display/display-authors.component";

type TDisplaySectionName =
  | "Create User Form"
  | "See All Users"
  | "Create Author Form"
  | "See All Authors";

function App() {
  const [displayedSection, setDisplayedSection] =
    useState<TDisplaySectionName>("See All Users");

  return (
    <div className="p-2">
      <H1 text={"Book Tracker"} />

      <div className="flex justify-center p-2">
        <div className="w-1/3 border border-gray-700 rounded-md shadow-md shadow-gray-400 p-4 flex justify-around gap-2">
          <Button
            type="button"
            color="blue"
            text="Create New User"
            onClick={() => setDisplayedSection("Create User Form")}
          />
          <Button
            type="button"
            color="blue"
            text="See All Users"
            onClick={() => setDisplayedSection("See All Users")}
          />
          <Button
            type="button"
            color="blue"
            text="Create New Author"
            onClick={() => setDisplayedSection("Create Author Form")}
          />
          <Button
            type="button"
            color="blue"
            text="See All Authors"
            onClick={() => setDisplayedSection("See All Authors")}
          />
        </div>
      </div>

      {displayedSection === "Create User Form" && (
        <div className="flex justify-center w-full">
          <div className="w-1/3">
            <CreateUserForm />
          </div>
        </div>
      )}

      {displayedSection === "See All Users" && (
        <div className="flex justify-center w-full">
          <div className="flex flex-col gap-2 w-1/3 border border-gray-700 rounded-md shadow-md shadow-gray-400 p-4">
            <DisplayUsers />
          </div>
        </div>
      )}

      {displayedSection === "Create Author Form" && (
        <div className="flex justify-center w-full">
          <div className="w-1/3">
            <CreateAuthorForm />
          </div>
        </div>
      )}

      {displayedSection === "See All Authors" && (
        <div className="flex justify-center w-full">
          <div className="flex flex-col gap-2 w-1/3 border border-gray-700 rounded-md shadow-md shadow-gray-400 p-4">
            <DisplayAuthors />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
