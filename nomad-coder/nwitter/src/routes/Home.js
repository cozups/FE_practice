import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { dbService } from 'firebaseInstance';

const Home = () => {
  const [nweet, setNweet] = useState('');
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const docRef = addDoc(collection(dbService, 'nweets'), {
        nweet,
        createdAt: Date.now(),
      });
      setNweet('');
      console.log('Document written with ID: ', docRef.id);
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;

    setNweet(value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="What's on your mind?"
          maxLength={300}
          value={nweet}
          onChange={onChange}
        />
        <input type="submit" value="Nweet" />
      </form>
    </div>
  );
};
export default Home;
