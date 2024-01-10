import { RecoilRoot } from 'recoil';
import { CurrentUserInfo } from './components/AsyncDataQuery/CurrentUserInfo';
import { AsyncCurrentUserInfo } from './components/AsyncDataQuery/AsyncCurrentUserInfo';
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { UserInfo } from './components/AsyncDataQuery/UserInfo';

function App() {
  return (
    <RecoilRoot>
      <CurrentUserInfo />
      <ErrorBoundary>
        <React.Suspense fallback={<div>Loading...</div>}>
          <AsyncCurrentUserInfo />
          <UserInfo id={3} />
        </React.Suspense>
      </ErrorBoundary>
    </RecoilRoot>
  );
}

export default App;
