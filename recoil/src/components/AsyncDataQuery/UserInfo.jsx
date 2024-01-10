import React from 'react';
import { useRecoilValue } from 'recoil';
import { userNameQuery } from '../../state/user';

export const UserInfo = ({ id }) => {
  const userName = useRecoilValue(userNameQuery(id));
  return <div>{userName}</div>;
};
