import React, { useState } from 'react';

import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUsersListHandler = (username, age) => {
    setUsersList((prevUserList) => [
      ...prevUserList,
      {
        id: `user${Math.random()}`,
        name: username,
        age: age,
      },
    ]);
  };

  return (
    <>
      <AddUser onAddUser={addUsersListHandler} />
      <UsersList users={usersList} />
    </>
  );
}

export default App;
