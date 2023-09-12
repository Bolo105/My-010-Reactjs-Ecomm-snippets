import React from 'react'
import EcommComp03 from './EcommComp03';
import styled from 'styled-components';

const Sec = styled.section`
   margin-top: 0px;
`;
const LatP = styled.section`
  padding: 33px 0px;
  background: #f7f7f7f7;
`;


function EcommBase03() {
  return (
<Sec id='ecommcomp3'>
    <LatP class="latest-product">
    <div class="container">
        <h2>Latest Products</h2>
        <hr />
        <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-12 my-2">
                <EcommComp03 
                imagen='product27' product='Broccoli' price='$ 19.00' cart='ADD TO CART'
                />
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 my-2">
                <EcommComp03 
                imagen='product23' product='Onion' price='$ 19.00' cart='ADD TO CART'
                />
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 my-2">
                <EcommComp03 
                imagen='product22' product='Carrot' price='$ 19.00' cart='ADD TO CART'
                />
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 my-2">
                <EcommComp03 
                imagen='product28' product='Garlic' price='$ 19.00' cart='ADD TO CART'
                />
            </div>
        </div>
    </div>
</LatP>
<LatP class="sell-product">
    <div class="container">
        <h2>Most Sell Products</h2>
        <hr />
        <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-12 my-2">
                <EcommComp03 
                imagen='product1' product='Rice' price='$ 19.00' cart='ADD TO CART'
                />
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 my-2">
                <EcommComp03 
                imagen='product2' product='Eggs' price='$ 19.00' cart='ADD TO CART'
                /> 
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 my-2">
                <EcommComp03 
                imagen='product3' product='Apple' price='$ 19.00' cart='ADD TO CART'
                />
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 my-2">
                <EcommComp03 
                imagen='product4' product='Onion' price='$ 19.00' cart='ADD TO CART'
                />
            </div>
        </div>
    </div>
</LatP>
</Sec>
  )
}

export default EcommBase03;