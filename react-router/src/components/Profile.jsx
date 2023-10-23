import { useAuth } from './auth';
import { useNavigate } from 'react-router-dom';

export const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const onLogout = () => {
    auth.logout();
    navigate('/');
  };
  return (
    <>
      <div>Welcome {auth.user}</div>
      <button onClick={onLogout}>Logout</button>
    </>
  );
};
