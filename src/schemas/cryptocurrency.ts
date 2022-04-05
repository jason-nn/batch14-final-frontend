interface Cryptocurrency {
  id: number;
  created_at: string;
  updated_at: string;

  price: number;
  name: string;
  symbol: string;
}
export default Cryptocurrency;
