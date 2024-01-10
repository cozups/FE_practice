import { RecoilRoot } from 'recoil';
import { AsyncCurrentUserInfo } from './components/AsyncDataQuery/AsyncCurrentUserInfo';
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

function App() {
  return (
    <RecoilRoot>
      <ErrorBoundary>
        <React.Suspense fallback={<div>Loading...</div>}>
          <AsyncCurrentUserInfo />
        </React.Suspense>
      </ErrorBoundary>
    </RecoilRoot>
  );
}

export default App;
