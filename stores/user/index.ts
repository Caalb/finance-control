import { defineStore } from 'pinia';

import { user_state } from './state';
import { registerUser } from './actions/registerUser';
import { userLogin } from './actions/userLogin';
import { userLogout } from './actions/userLogout';

export const useUserStore = defineStore('user', {
  state: user_state,
  actions: {
    registerUser,
    userLogin,
    userLogout,
  }
});
