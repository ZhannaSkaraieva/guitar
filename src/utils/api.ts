export const getProducts = async () => {
  const response = await fetch('http://localhost:3000/products');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.json();
};