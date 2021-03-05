export let baseUrl = '';

//TODO: ADD ACTUAL DOMAIN
if (window.location.origin === 'XXX') {
  baseUrl = 'XXX';
}

export const authUrls = {
  login: '/login',
  logout: '/logout'
}
