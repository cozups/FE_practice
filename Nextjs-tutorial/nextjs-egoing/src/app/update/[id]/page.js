'use client';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
export default function Update() {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const router = useRouter();
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:9999/topics/${id}`)
      .then((resp) => resp.json())
      .then((result) => {
        setTitle(result.title);
        setBody(result.body);
      });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, body }),
    };
    fetch(`http://localhost:9999/topics/${id}`, options)
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
        <input
          type="text"
          name="title"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </p>
      <p>
        <textarea
          name="body"
          placeholder="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
      </p>
      <p>
        <input type="submit" value="update" />
      </p>
    </form>
  );
}
