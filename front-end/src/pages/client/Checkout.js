import React, { useContext, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import TrybeerContext from '../../context/TrybeerContext';
import ClientMenu from '../../components/client/ClientMenu';
import CheckoutCard from '../../components/checkoutCard';
import '../../css/client/checkout.css';
import { createNewSale } from '../../services/fetch';

function Checkout() {
  const initialState = 0;
  const [isLogged, setIsLogged] = useState(true);
  const [street, setStreet] = useState('');
  const [houseNum, setHouseNum] = useState(initialState);
  const [statusSale, setStatusSale] = useState(false);
  const { totalPrice } = useContext(TrybeerContext);

  const products = JSON.parse(localStorage.getItem('cart'));
  const user = JSON.parse(localStorage.getItem('user'));
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() === initialState ? '01' : now.getMonth();
  const day = now.getDate();
  const date = `${day}/${month}/${year}`;

  useEffect(() => {
    if (localStorage.getItem('user') === null) setIsLogged(false);
  }, []);

  const handleStreetInput = (input) => {
    setStreet(input);
    // tb mandar para bd?
  };
  const handleHouseNumInput = (input) => {
    setHouseNum(input);
    // tb mandar para bd?
  };

  const handleResult = (result) => {
    const time = 1000;
    if (result.message === 'Created') {
      document.getElementById('sucess').innerHTML =
        'Compra realizada com sucesso!';
      setTimeout(() => {
        setStatusSale(true);
      }, time);
    }
  };

  return (
    <div className="orders-big-container">
      <ClientMenu data-testid="top-title" title="Finalizar pedido" />
      <div className="checkout-container yellow-background">
        <div className="content-checkout">
          <h5 className="white-text">Produtos</h5>
          {!totalPrice && <h2>Não há produtos no carrinho</h2>}
          {totalPrice && (
            <div className="orders-list">
              {products.map((item, index) => (
                <CheckoutCard item={item} index={index} key={item} />
              ))}
            </div>
          )}
          <div>
            <h5 data-testid="order-total-value" className="white-text">
              Total:{' '}
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(totalPrice)}
            </h5>
          </div>
          <div className="address">
            <h5 className="white-text">Endereço</h5>
            <div className="input-container">
              <input
                className="input-layout"
                placeholder="Rua:"
                data-testid="checkout-street-input"
                type="text"
                id="street"
                onChange={(e) => handleStreetInput(e.target.value)}
              />
            </div>
            <div className="input-container">
              <input
                className="input-layout"
                placeholder="Número da casa:"
                data-testid="checkout-house-number-input"
                type="text"
                id="house"
                onChange={(e) => handleHouseNumInput(e.target.value)}
              />
            </div>
            <button
              className="waves-effect waves-light btn btn-layout"
              type="button"
              data-testid="checkout-finish-btn"
              disabled={
                totalPrice === initialState ||
                houseNum === initialState ||
                street === ''
              }
              // onClick={() => done()}
              onClick={() => {
                createNewSale(
                  user.email,
                  totalPrice,
                  street,
                  houseNum,
                  date,
                  products
                ).then((result) => handleResult(result));
              }}
            >
              Finalizar pedido
            </button>
          </div>
          <div id="sucess" />
          {statusSale && <Redirect to="/products" />}
          {!isLogged && <Redirect to="/login" />}
        </div>
      </div>
    </div>
  );
}

export default Checkout;

// email,
//   totalPrice,
//   address,
//   addressNumber,
//   saleDate,
//   products
