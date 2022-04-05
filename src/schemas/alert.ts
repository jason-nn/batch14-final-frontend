import Cryptocurrency from 'schemas/cryptocurrency';

interface Alert {
  id: number;
  created_at: string;
  updated_at: string;

  price: number;
  operator: 'higher' | 'lower';
  cryptocurrency: Cryptocurrency;

  user_id: number;
  cryptocurrency_id: number;
}

export default Alert;
