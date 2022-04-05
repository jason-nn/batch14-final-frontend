import Cryptocurrency from 'schemas/cryptocurrency';

interface Purchase {
  id: number;
  created_at: string;
  updated_at: string;

  price: number;
  quantity: number;
  cryptocurrency: Cryptocurrency;

  user_id: number;
  cryptocurrency_id: number;
}

export default Purchase;
