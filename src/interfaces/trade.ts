export interface ITradeDescription {
  standarts: string;
  header: string;
  deadline: string;
  waranty: string;
  paying: string;
  price?: string;
  actions?: string;
}

export interface ITradeParticipant extends ITradeDescription {
  priceStart: number;
  priceCurrent?: number;
  id: string;
}
