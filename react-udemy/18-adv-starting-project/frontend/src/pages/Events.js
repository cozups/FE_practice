import React from 'react';
import { Link } from 'react-router-dom';

const DUMMY_EVENTS = [
  { id: 'e1', title: 'event 1' },
  { id: 'e2', title: 'event 2' },
  { id: 'e3', title: 'event 3' },
];

function EventsPage() {
  return (
    <>
      <h1>EventsPage</h1>
      <ul>
        {DUMMY_EVENTS.map((evt) => (
          <li key={evt.id}>
            <Link to={`/events/${evt.id}`}>{evt.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default EventsPage;
