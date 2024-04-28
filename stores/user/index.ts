import { defineStore } from 'pinia';

import { user_state } from './state';
import { registerUser } from './actions/registerUser';

export const useUserStore = defineStore('user', {
  state: user_state,
  actions: {
    registerUser,
  }
});
