import { serverSideFunction } from '@/app/utils/server-utils';

export default function ServerRoutePage() {
  console.log('Server route rendered.');
  const result = serverSideFunction();
  return (
    <>
      <div>Server Route Page</div>
      <p>{result}</p>
    </>
  );
}
