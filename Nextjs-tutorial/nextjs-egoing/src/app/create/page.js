'use client';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
export default function Create() {
  const router = useRouter();
  const titleRef = useRef();
  const bodyRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const body = bodyRef.current.value;

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, body }),
    };
    fetch(`http://localhost:9999/topics`, options)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        const lastId = result.id;
        router.push(`/read/${lastId}`);
        router.refresh();
      });
  };
  return (
    <form onSubmit={onSubmit}>
      <p>
        <input type="text" name="title" placeholder="title" ref={titleRef} />
      </p>
      <p>
        <textarea name="body" placeholder="body" ref={bodyRef}></textarea>
      </p>
      <p>
        <input type="submit" value="create" />
      </p>
    </form>
  );
}
