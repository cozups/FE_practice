import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  currentUserIDState,
  currentUserNameQuery,
  userAddressQuery,
  userListState,
} from '../../state/user';

export const AsyncCurrentUserInfo = () => {
  const userName = useRecoilValue(currentUserNameQuery);
  const userAddress = useRecoilValue(userAddressQuery);
  const userList = useRecoilValue(userListState);
  const setCurrentUserId = useSetRecoilState(currentUserIDState);

  return (
    <div>
      <h1>{userName}</h1>
      <div>
        {userAddress.city}, {userAddress.street}, {userAddress.suite} (
        {userAddress.zipcode})
      </div>
      <ul>
        {userList.map((user) => (
          <li key={user.id} onClick={() => setCurrentUserId(user.id)}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
