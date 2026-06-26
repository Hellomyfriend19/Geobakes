export interface CookieItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  badge?: string;
}

export interface OrderItem {
  cookie: CookieItem;
  quantity: number;
}

export interface PerkItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
