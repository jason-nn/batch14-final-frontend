interface Portfolio {
  [symbol: string]: {
    symbol: string;
    currentPrice: number;
    sum: number;
    sumProduct: number;
  };
}

export default Portfolio;
