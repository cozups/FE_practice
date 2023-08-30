import { authService } from 'firebaseInstance';
import { useHistory } from 'react-router-dom';

const Profile = () => {
  let history = useHistory();
  const onClick = () => {
    authService.signOut();
    history.push('/');
  };

  return (
    <>
      <button onClick={onClick}>Log Out</button>
    </>
  );
};
export default Profile;
