import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image:
      'https://images.unsplash.com/photo-1678737169727-a3236885e763?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=423&q=80',
    address: 'Some address 5, 12345 Some City',
    description: 'This is a first meetup.',
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image:
      'https://images.unsplash.com/photo-1678737169727-a3236885e763?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=423&q=80',
    address: 'Some address 5, 12345 Some City',
    description: 'This is a second meetup.',
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
