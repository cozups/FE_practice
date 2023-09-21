import { authService, dbService } from 'firebaseInstance';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { collection, getDocs, query, where, orderBy } from 'firebase/firestore';
import { updateProfile } from 'firebase/auth';

const Profile = ({ refreshUser, userObject }) => {
  let history = useHistory();
  const [newDisplayName, setNewDisplayName] = useState(userObject.displayName);
  const onClick = () => {
    authService.signOut();
    history.push('/');
  };
  const getMyNweets = async () => {
    const nweets = await getDocs(
      query(
        collection(dbService, 'nweets'),
        where('creatorId', '==', userObject.uid),
        orderBy('createdAt')
      )
    );
    nweets.forEach((doc) => console.log(doc.data()));
  };
  useEffect(() => {
    getMyNweets();
  }, []);

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewDisplayName(value);
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    if (userObject.displayName !== newDisplayName) {
      await updateProfile(userObject, { displayName: newDisplayName });
      refreshUser();
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Display name"
          value={newDisplayName}
          onChange={onChange}
        />
        <input type="submit" value="Update Profile" />
      </form>
      <button onClick={onClick}>Log Out</button>
    </>
  );
};
export default Profile;
