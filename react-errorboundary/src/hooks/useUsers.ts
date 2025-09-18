import { useEffect, useState } from "react";
import { type User } from "../types/user";
import { fetchUsers } from "../apis/user";
import { useErrorBoundary } from "react-error-boundary";

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const { showBoundary } = useErrorBoundary();

  useEffect(() => {
    async function loadUsers() {
      try {
        setLoading(true);
        const data = await fetchUsers();
        setUsers(data);
      } catch (err) {
        showBoundary(err);
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }

    loadUsers();
  }, [showBoundary]);

  return { users, loading, error };
}
