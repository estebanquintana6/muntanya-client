import { getUsers, deleteUser } from "@/app/libs/users";
import getSession from "@/app/utils/getSession";
import UsersList from "./UsersList";

export default async function UsersPanel() {
  const session = await getSession();

  const fetchUsers = async () => {
    "use server";
    return await getUsers();
  };

  const handleDeleteUser = async (id: string) => {
    "use server";
    await deleteUser(id);
  };

  return (
    <div>
      <UsersList
        currentUser={session.username}
        getUsers={fetchUsers}
        deleteUser={handleDeleteUser}
      />
    </div>
  );
}
