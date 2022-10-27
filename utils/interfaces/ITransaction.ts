export enum TransactionType {
  TokenSalePurchase = "Token Sale Purchase",
  MarketPlaceOffer = "MarketPlace Offer",
  MarketPlaceDeposit = "MarketPlace Deposit",
  LuckyDrawEnter = "Enter Lucky Draw",
  StakingDeposit = "Staking Deposit",
  StakingWithdrawal = "Staking Withdrawal",
  StakingRedemption = "StakingRedemption",
  YieldWithdrawal = "YieldWithdrawal",
}

export interface ITransaction {
  from: string;
  to: string;
  transactionHash: string;
  tokenId?: number;
  category: TransactionType;
}
