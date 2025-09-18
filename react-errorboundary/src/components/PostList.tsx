import { useState } from "react";
import { usePosts } from "../hooks/usePosts";

export default function PostList() {
  const [page, setPage] = useState(1);
  const { posts } = usePosts({ page });

  return (
    <div>
      <p>now: {page} page</p>
      <div>
        <button onClick={() => page - 1 > 0 && setPage((prev) => prev - 1)}>page - 1</button>
        <button onClick={() => page + 1 <= 10 && setPage((prev) => prev + 1)}>page + 1</button>
      </div>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
