import { useEffect, useRef, useState } from "react";
import type { Post } from "../types/post";
import { useErrorBoundary } from "react-error-boundary";

interface UsePostsQuery {
  page?: number;
}

export function usePosts({ page = 1 }: UsePostsQuery = {}) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const { showBoundary } = useErrorBoundary();

  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    async function loadPosts() {
      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController();

      setLoading(true);

      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?page=${page}`, {
          signal: abortControllerRef.current?.signal,
        });
        const data = (await response.json()) as Post[];
        setPosts(data);
      } catch (err: any) {
        if (err.name === "AbortError") {
          console.log("Aborted");
          return;
        }
        showBoundary(err);
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }

    loadPosts();
  }, [page, showBoundary]);

  return { posts, loading, error };
}
