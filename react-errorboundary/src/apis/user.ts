import type { User } from "../types/user";

export async function fetchUsers(): Promise<User[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const users: User[] = await response.json();

  return users;
}
