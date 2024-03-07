import { Icon } from "@mui/material";
import { CryptoCurrency } from "./types";

export const currencies: CryptoCurrency[] = [
  {
    symbol: "DOGE",
    name: "Dogecoin",
    icon: <Icon component="img" src="/icons/doge.svg" alt="Dogecoin" />,
  },
  {
    symbol: "BTC",
    name: "Bitcoin",
    icon: <Icon component="img" src="/icons/bitcoin1.png" alt="Bitcoin" />,
  },
  {
    symbol: "SOL",
    name: "Solana",
    icon: <Icon component="img" src="/icons/solana-sol-logo.svg" alt="Solana" />,
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    icon: <Icon component="img" src="/icons/ethereum-eth-logo.svg" alt="Ethereum" />,
  },
];
