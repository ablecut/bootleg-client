import axios from 'axios';
import Cookies from 'js-cookie';

import {baseUrl} from '../url';

const token = Cookies.get('Authentication');

const headers = {
  Authentication: token
}

export const api = axios.create({
  baseURL:baseUrl,
  headers
});
