import { Suspense, lazy } from "react";

const UserList = lazy(() => import("./components/UserList"));
const PostList = lazy(() => import("./components/PostList"));

function App() {
  return (
    <>
      <Suspense fallback={<p>loading users...</p>}>
        <UserList />
      </Suspense>
      <Suspense fallback={<p>loading posts...</p>}>
        <PostList />
      </Suspense>
    </>
  );
}

export default App;
