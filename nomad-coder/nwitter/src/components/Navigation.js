import { Link } from 'react-router-dom';

const Navigation = ({ userObject }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">{userObject.displayName}의 Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
