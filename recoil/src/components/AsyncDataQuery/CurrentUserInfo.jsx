import React from 'react';
import { useRecoilValue } from 'recoil';
import { currentUserNameState } from '../../state/user';

export const CurrentUserInfo = () => {
  const userName = useRecoilValue(currentUserNameState);
  return <div>{userName}</div>;
};
