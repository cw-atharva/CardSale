interface ICustomer {
  fullName: string;
  mobileNumber: number;
  emailId: string;
}

interface ICard {
  cardNumber: number;
  cardNetwork: string;
  accountId: string;
  expiryDate: string;
  id: string;
  lastFourDigits: number;
}

interface IAccount {
  accountId: string;
}

export interface ICustomerDetails {
  customer: ICustomer;
  card: ICard;
  account: IAccount;
}
