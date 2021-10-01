import { lazy } from 'react';

export default lazy(() => {
  return import('../components/HotelListPage');
});
