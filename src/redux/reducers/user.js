const INITIAL_STATE = {
  email: '',
  name: '',
};

const user = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case 'LOGIN_SUCCESS':
    return {
      ...state,
      email: payload.email,
      name: payload.name,
    };
  default: return state;
  }
};

export default user;
