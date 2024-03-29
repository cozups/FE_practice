import { atom, selector, selectorFamily } from 'recoil';

const tableOfUsers = [
  {
    id: 0,
    name: 'James',
  },
  {
    id: 1,
    name: 'Tina',
  },
];

export const currentUserIDState = atom({
  key: 'currentUserID',
  default: 1,
});

export const currentUserNameState = selector({
  key: 'currentUserName',
  get: ({ get }) => {
    return tableOfUsers[get(currentUserIDState)].name;
  },
});

export const currentUserNameQuery = selector({
  key: 'currentUserNameQuery',
  get: async ({ get }) => {
    const userId = get(currentUserIDState);
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users?id=${userId}`
    );
    const data = await response.json();
    return data[0].name;
  },
});

export const userNameQuery = selectorFamily({
  key: 'userName',
  get: (userId) => async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users?id=${userId}`
    );
    if (response.error) {
      throw response.error;
    }
    const data = await response.json();
    return data[0].name;
  },
});

export const userInfoQuery = selectorFamily({
  key: 'userInfo',
  get: (userId) => async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users?id=${userId}`
    );
    if (response.error) {
      throw response.error;
    }
    const data = await response.json();
    return data[0];
  },
});

export const currentUserInfoQuery = selector({
  key: 'currentUserInfo',
  get: ({ get }) => {
    return get(userInfoQuery(get(currentUserIDState)));
  },
});

export const userAddressQuery = selector({
  key: 'userAddress',
  get: ({ get }) => {
    const currentUserInfo = get(currentUserInfoQuery);
    return currentUserInfo.address;
  },
});

export const userListState = selector({
  key: 'userList',
  get: async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    return response.json();
  },
});
