export interface ExampleStateInterface {
  prop: boolean,
  // eslint-disable-next-line @typescript-eslint/ban-types
  me:object,
  token: string,
  isAuthenticated: boolean
}

function state(): ExampleStateInterface {
  return {
    prop: false,
   me:{},
    token:'',
    isAuthenticated: false
  }
};

export default state;
