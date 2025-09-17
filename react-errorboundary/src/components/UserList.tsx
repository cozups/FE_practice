import { useUsers } from "../hooks/useUsers";

export default function UserList() {
  const { users } = useUsers();

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
