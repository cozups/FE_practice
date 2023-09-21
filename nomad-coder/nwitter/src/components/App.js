import { useEffect, useState } from 'react';
import AppRouter from 'components/Router';
import { authService, authStateObserver } from 'firebaseInstance';
import { updateCurrentUser } from 'firebase/auth';

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedin, setIsLoggedIn] = useState(false);
  const [userObject, setUserObject] = useState(null);

  useEffect(() => {
    authStateObserver((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserObject(user);
      } else {
        setIsLoggedIn(false);
        setUserObject(null);
      }
      setInit(true);
    });
  }, []);

  const refreshUser = async () => {
    await updateCurrentUser(authService, authService.currentUser);
    setUserObject(authService.currentUser);
  };

  return (
    <>
      {init ? (
        <AppRouter
          refreshUser={refreshUser}
          isLoggedin={isLoggedin}
          userObject={userObject}
        />
      ) : (
        'Initializing...'
      )}
      <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
    </>
  );
}

export default App;
