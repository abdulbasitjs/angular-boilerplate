export const AuthEndpoints = [
  {
    baseUrl: 'console',
    name: 'login',
    alias: 'login',
    path: 'user/',
    noToken: true,
    runAt: 'onDemand',
  },

];

export const AuthEndpointsMapping = {
  // Authentication Apis
  Login: 'login',
};
