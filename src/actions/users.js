export const getUsers = () => ({
  type: 'FETCH_USERS'
});

export const getUserById = uid => ({
  type: 'FETCH_USER',
  payload: uid
});

export const updateUser = (data, isProfile) => ({
  type: 'UPDATE_USER',
  payload: { data, isProfile }
});

export const addUser = data => ({
  type: 'ADD_USER',
  payload: data
});

export const deleteUser = uid => ({
  type: 'DELETE_USER',
  payload: uid
});
