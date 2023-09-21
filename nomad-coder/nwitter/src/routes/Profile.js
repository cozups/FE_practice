import { authService, dbService } from 'firebaseInstance';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { collection, getDocs, query, where, orderBy } from 'firebase/firestore';

const Profile = ({ userObject }) => {
  let history = useHistory();
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
  return (
    <>
      <button onClick={onClick}>Log Out</button>
    </>
  );
};
export default Profile;
