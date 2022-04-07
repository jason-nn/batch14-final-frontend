import axios from 'axios';

interface User {
  email: string;
  password: string;
}

interface HodlrPurchase {
  cryptocurrencyId: number;
  price: number;
  quantity: number;
}

interface HodlrAlert {
  cryptocurrencyId: number;
  price: number;
  operator: 'higher' | 'lower';
}

const hodlr = {
  signIn: (user: User) => {
    return axios({
      method: 'post',
      url: 'api/v1/sessions',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        user: {
          email: user.email.toLowerCase(),
          password: user.password,
        },
      },
    });
  },

  signUp: (user: User) => {
    return axios({
      method: 'post',
      url: 'api/v1/registrations',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        user: {
          email: user.email.toLowerCase(),
          password: user.password,
        },
      },
    });
  },

  cryptocurrencies: (token: string) => {
    return axios({
      method: 'get',
      url: 'api/v1/cryptocurrencies',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
  },

  cryptocurrency: (token: string, symbol: string) => {
    return axios({
      method: 'get',
      url: `api/v1/cryptocurrencies/${symbol.toLowerCase()}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
  },

  symbols: (token: string) => {
    return axios({
      method: 'get',
      url: 'api/v1/cryptocurrencies/symbols',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
  },

  purchases: (token: string) => {
    return axios({
      method: 'get',
      url: `api/v1/purchases`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
  },

  createPurchase: (token: string, purchase: HodlrPurchase) => {
    return axios({
      method: 'post',
      url: `api/v1/purchases`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      data: {
        purchase: {
          cryptocurrency_id: purchase.cryptocurrencyId,
          price: purchase.price,
          quantity: purchase.quantity,
        },
      },
    });
  },

  alerts: (token: string) => {
    return axios({
      method: 'get',
      url: `api/v1/alerts`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
  },

  createAlert: (token: string, alert: HodlrAlert) => {
    return axios({
      method: 'post',
      url: `api/v1/alerts`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      data: {
        alert: {
          cryptocurrency_id: alert.cryptocurrencyId,
          price: alert.price,
          operator: alert.operator,
        },
      },
    });
  },

  destroyAlert: (token: string, id: number) => {
    return axios({
      method: 'delete',
      url: `api/v1/alerts/${id}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
  },
};

export default hodlr;
