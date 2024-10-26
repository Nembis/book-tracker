import { FC, useEffect, useState } from "react";
import { IUser } from "../../refs/constants.ref";
import { Button } from "../button/button.component";
import { deleteUser, getAllUsers } from "../../http-requests/user.request";

interface DisplayUsersProps {}

export const DisplayUsers: FC<DisplayUsersProps> = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  const loadUsers = async () => {
    try {
      const res = await getAllUsers();
      setUsers(() => res.data);
    } catch (err) {
      console.log("Error failed to load users: ", err);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <>
      {users.map((user) => {
        const handleDeleteUser = async () => {
          try {
            await deleteUser(user.userId);
            await loadUsers();
            alert(`Deleted user: ${user.email}`);
          } catch (err) {
            console.log("Failed to delete user: ", err);
          }
        };

        return (
          <div
            key={user.userId}
            className="grid grid-cols-5 border border-gray-700 rounded-md p-2"
          >
            <p className="col-span-4">
              <span className="underline">Email:</span>
              <br />
              {user.email}
            </p>
            <Button text="Delete" color="red" onClick={handleDeleteUser} />
          </div>
        );
      })}
    </>
  );
};
