import { host } from './variables';

const token =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYTkyYzg5NjgxZDY1MTczNDA2YjMzMyIsImZpcnN0TmFtZSI6IkN1c3RvbWVyIiwibGFzdE5hbWUiOiJOZXdvbmUiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2MzkxNjYwOTUsImV4cCI6MTYzOTIwMjA5NX0.75_QB5Ndi_xJem1Dk_VzHDdYVjhOMGMSk-jQvtoIM5E';
export const postShoppingCart = async (cart) => {
  const res = await fetch(`${host}/api/cart`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${token}`,
    },
    body: JSON.stringify(cart),
  });
  if (!res.ok) {
    throw new Error(`Could not fetch ${host}`);
  }
  return res.json();
};
