import { ProductProps } from '../../components/card/type';

export interface CartItemsType {
  event: 0 | 1;
  id: string;
  materialType: number;
  name: string;
  price: number;
  count: number;
}

export interface CartStoreType {
  cartItems: CartItemsType[] | [];
  clearCartItems: () => void;
  increaseCartItem: (item: ProductProps) => void;
  decreaseCartItem: (item: ProductProps) => void;
}
