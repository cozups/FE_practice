import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const fetchUserByEmail = (email) => {
  return axios.get(`http://localhost:4000/users/${email}`);
};

const fetchCoursesByChannelId = (channelId) => {
  return axios.get(`http://localhost:4000/channels/${channelId}`);
};

export const DependentQueriesPage = ({ email }) => {
  const { data: user } = useQuery({
    queryKey: ['user', email],
    queryFn: () => fetchUserByEmail(email),
  });
  const channelId = user?.data.channelId;

  const { data: courses } = useQuery({
    queryKey: ['courses', channelId],
    queryFn: () => fetchCoursesByChannelId(channelId),
    enabled: !!channelId,
  });

  return <div>DependentQueries.page</div>;
};
