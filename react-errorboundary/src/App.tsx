import { Suspense, lazy } from "react";

const UserList = lazy(() => import("./components/UserList"));

function App() {
  return (
    <Suspense fallback={<p>loading...</p>}>
      <UserList />
    </Suspense>
  );
}

export default App;
