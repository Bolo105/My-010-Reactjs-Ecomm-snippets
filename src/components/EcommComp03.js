import React from 'react'
import { FaStar, FaShoppingCart, FaRegHeart } from 'react-icons/fa';
import styled from 'styled-components';

const Imag = styled.img`
  height: 160px;
  transition: 0.6s;
  @media (max-width: 1024px) {
        width: 75%;
    }
`;
const Head = styled.h2`
  font-size: 18px;
  padding: 15px 0px;
`;
const Head1 = styled.h2`
  font-size: 24px;
  padding: 10px 0px;
`;
const A = styled.a`
  border: 1px solid #198754;
  padding: 5px 23px;
  color: #198754;
  border-radius: 50px;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 14px;
  transition: 0.6s;
  &:hover {
    background: #22ab07;
    color: #fff;
  }
`;
const A1 = styled.a`
   font-size: 24px;
   text-decoration: none;
   text-transform: capitalize;
   color: #000;
`;



function EcommComp03({imagen, product, price, cart}) {
  return (
    <div>
      <div class="card border-0 shadow-sm">
        <div class="card-body text-center">
          <Imag src={require(`./images/${imagen}.jpg`)} alt="" />
          <Head class="product_name">
            <A1 href="/">{product}</A1>
          </Head>
          <div class="rating ">
            <FaStar size='18px' color='#fcec05'/>
            <FaStar size='18px' color='#fcec05'/>
            <FaStar size='18px' color='#fcec05'/>
            <FaStar size='18px' color='#fcec05'/>
            <FaStar size='18px' color='#fcec05'/>
          </div>
          <Head1 class="price">{price}</Head1>
          <div class="btn d-flex justify-content-between align-items-center">
            <A href="/" class="add-to-cart-btn">
              <FaShoppingCart /> {cart}
            </A>
            <a href="/" class="add-to-favorite text-success">
              <FaRegHeart />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EcommComp03;