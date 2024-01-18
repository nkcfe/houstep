const request = async (url: string) => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    const errData = await response.json();
    throw errData;
  } catch (e) {
    console.log(e);
  }
};

const getProductData = async () => {
  const result = await request('http://localhost:3001/items');
  return result;
};

export default getProductData;
