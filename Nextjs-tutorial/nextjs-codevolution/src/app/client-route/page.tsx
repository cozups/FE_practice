'use client';

import { serverSideFunction } from '@/app/utils/server-utils';

export default function ClientRoutePage() {
  console.log('Client route rendered.');
  const result = serverSideFunction();
  return (
    <>
      <div>Client Route Page</div>
      <p>{result}</p>
    </>
  );
}
