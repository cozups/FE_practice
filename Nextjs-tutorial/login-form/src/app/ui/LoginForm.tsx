'use client';

import { useRouter } from 'next/router';

export default function LoginForm() {
  // const router = useRouter();

  return (
    <div className="bg-white bg-opacity-20 rounded m-16 p-8 flex flex-col items-center py-32">
      <h1 className="text-center font-bold text-3xl my-8">Welcome back!</h1>
      <form action="" className="flex flex-col justify-center items-start">
        <div className="flex justify-center items-center">
          <input type="text" className="my-4 bg-black bg-opacity-40" />
          <label htmlFor="" className="ml-4">
            email
          </label>
        </div>
        <div className="flex justify-center items-center">
          <input type="text" className="bg-black bg-opacity-40" />
          <label htmlFor="" className="ml-4">
            password
          </label>
        </div>
        <button
          type="submit"
          className="rounded bg-white bg-opacity-30 px-4 py-2 mt-4 self-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
