import { create } from 'zustand';
import { CartStoreType } from './type';
import { ProductProps } from '../../components/card/type';

const MAX_COUNT = 999;

const useCartStore = create<CartStoreType>((set) => ({
  cartItems: [],
  clearCartItems: () => set({ cartItems: [] }),
  increaseCartItem: (item: ProductProps) =>
    set((state) => {
      const { cartItems } = state;

      const currentProduct = item;
      const checkAlreadyCart = cartItems.findIndex(
        ({ id }) => id === currentProduct.id,
      );

      if (checkAlreadyCart === -1) {
        const newCartItems = [...cartItems, { ...currentProduct, count: 1 }];
        return { cartItems: newCartItems };
      } else {
        if (cartItems[checkAlreadyCart].count === MAX_COUNT) {
          alert('최대 구매 수량은 999개 입니다.');
          return { cartItems };
        }
        const newCartItems = [...cartItems];
        newCartItems[checkAlreadyCart].count += 1;
        return { cartItems: newCartItems };
      }
    }),
  decreaseCartItem: (item: ProductProps) =>
    set((state) => {
      const { cartItems } = state;
      const currentProduct = cartItems.find(({ id }) => id === item.id);
      const checkCountZero = currentProduct?.count === 1;

      if (checkCountZero) {
        const newCartItems = cartItems.filter(({ id }) => id !== item.id);
        return { cartItems: newCartItems };
      } else {
        const newCartItems = [...cartItems];
        const itemIndex = cartItems.findIndex(({ id }) => id === item.id);
        if (itemIndex === -1) return { cartItems: newCartItems };
        newCartItems[itemIndex].count -= 1;
        return { cartItems: newCartItems };
      }
    }),
}));

export default useCartStore;
