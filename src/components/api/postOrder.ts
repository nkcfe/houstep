import { CartItemsType } from '../../store/cartStore/type';

const request = async <T>(
  url: string,
  method: string,
  data?: CartItemsType[],
): Promise<T> => {
  try {
    const response = await fetch(url, { method, body: JSON.stringify(data) });
    if (response.ok) {
      const responseData: T = await response.json();
      return responseData;
    }

    const errData = await response.json();
    throw errData;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const orderCartData = async (data: CartItemsType[]) => {
  try {
    const result = await request('http://localhost:3001/order', 'POST', data);
    return result;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export default orderCartData;
