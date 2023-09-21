import { Route, Switch } from 'react-router-dom';
import Auth from 'routes/Auth';
import Home from 'routes/Home';
import Profile from 'routes/Profile';
import Navigation from 'components/Navigation';

const AppRouter = ({ isLoggedin, userObject }) => {
  return (
    <>
      {isLoggedin && <Navigation />}
      <Switch>
        {isLoggedin ? (
          <>
            <Route exact path="/">
              <Home userObject={userObject} />
            </Route>
            <Route exact path="/profile">
              <Profile userObject={userObject} />
            </Route>
          </>
        ) : (
          <Route exact path="/">
            <Auth />
          </Route>
        )}
      </Switch>
    </>
  );
};

export default AppRouter;
