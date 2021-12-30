import { MutationTree } from 'vuex';
import { ExampleStateInterface } from './state';


const mutation: MutationTree<ExampleStateInterface> = {
  someMutation (/* state: ExampleStateInterface */) {
    // your code
  },

  setToken:( state: ExampleStateInterface, token) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    state.token = token
    state.isAuthenticated = true
  },

  removeToken:( state: ExampleStateInterface) => {
    state.token = ''
    state.isAuthenticated = false
  },

  setMe: (state, me) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    state.me = me
  }


};

export default mutation;



