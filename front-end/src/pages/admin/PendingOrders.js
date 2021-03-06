import React, { useEffect, useState } from 'react';
import { getAllSales } from '../../services/fetch';
import OrderCard from '../../components/admin/OrderCard';
import AdminMenu from '../../components/admin/AdminMenu';

function PendingOrders() {
  const [allSales, setAllSales] = useState([]);

  useEffect(() => {
    getAllSales()
      .then((response) => setAllSales(response));
  }, []);

  return (
    <div className="orders-big-container yellow-background">
      <AdminMenu />
      <div className="orders-container">
        {allSales.map((order, index) => (
          <OrderCard key={ order.id } order={ order } index={ index } />))}
      </div>
    </div>
  );
}

export default PendingOrders;
