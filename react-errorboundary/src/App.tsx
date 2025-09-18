import { Suspense, lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallback";

const UserList = lazy(() => import("./components/UserList"));
const PostList = lazy(() => import("./components/PostList"));

function App() {
  return (
    <>
      <div>
        <h1>Users</h1>
        <ErrorBoundary fallback={<ErrorFallback message="Something went wrong when loading users!" />}>
          <Suspense fallback={<p>loading users...</p>}>
            <UserList />
          </Suspense>
        </ErrorBoundary>
      </div>

      <div>
        <h1>Posts</h1>
        <ErrorBoundary fallback={<ErrorFallback message="Something went wrong when loading posts!" />}>
          <Suspense fallback={<p>loading posts...</p>}>
            <PostList />
          </Suspense>
        </ErrorBoundary>
      </div>
    </>
  );
}

export default App;
