import React from 'react'
import EcommComp01 from './EcommComp01'
import styled from 'styled-components';

const Sec = styled.section`
   padding-top: 90px;
`;

function EcommBase01() {
  return (
    
<Sec id='ecommcomp1' className = "shop">
        <div className = "container mb-5">
         <div className = "row py-3">
            <div className = "col-lg-8 m-auto text-center">
                 <h1>Explore our Store</h1>
                 <h6 className = "text-center">Pick your product from our store</h6>
            </div>
         </div>
         <div className = "row">
            <div className = "col-lg-3 col-md-6 col-sm-6 text-center">
               <EcommComp01 
			     imagen='energy'
				 name='Energy Food'
				 price='$ 39.99'
			   />
            </div>
            <div className = "col-lg-3 col-md-6 col-sm-6 text-center">
			   <EcommComp01 
			     imagen='beans'
				 name='Energy Food'
				 price='$ 39.99'
				 />
            </div>
            <div className = "col-lg-3 col-md-6 col-sm-6 text-center">
			   <EcommComp01 
			     imagen='jugo'
				 name='Energy Food'
				 price='$ 39.99'
			   />
            </div>
            <div className = "col-lg-3 col-md-6 col-sm-6 text-center">
			   <EcommComp01 
			     imagen='refill'
				 name='Energy Food'
				 price='$ 39.99'
			   />
            </div>
        </div>
        <div className = "row">
            <div className = "col-lg-3 col-md-6 col-sm-6 text-center">
               <EcommComp01 
			     imagen='energy'
				 name='Energy Food'
				 price='$ 39.99'
			   />
            </div>
            <div className = "col-lg-3 col-md-6 col-sm-6 text-center">
			   <EcommComp01 
			     imagen='beans'
				 name='Energy Food'
				 price='$ 39.99'
			   />
            </div>
            <div className = "col-lg-3 col-md-6 col-sm-6 text-center">
			   <EcommComp01 
			     imagen='jugo'
				 name='Energy Food'
				 price='$ 39.99'
			   />
            </div>
            <div className = "col-lg-3 col-md-6 col-sm-6 text-center">
			   <EcommComp01 
			     imagen='refill'
				 name='Energy Food'
				 price='$ 39.99'
			   />
            </div>
        </div>
        <div className = "row">
            <div className = "col-lg-3 col-md-6 col-sm-6 text-center">
			   <EcommComp01 
			     imagen='energy'
				 name='Energy Food'
				 price='$ 39.99'
			   />
            </div>
            <div className = "col-lg-3 col-md-6 col-sm-6 text-center">
			   <EcommComp01 
			     imagen='beans'
				 name='Energy Food'
				 price='$ 39.99'
			   />
            </div>
            <div className = "col-lg-3 col-md-6 col-sm-6 text-center">
			   <EcommComp01 
			     imagen='jugo'
				 name='Energy Food'
				 price='$ 39.99'
			   />
            </div>
            <div className = "col-lg-3 col-md-6 col-sm-6 text-center">
			   <EcommComp01 
			     imagen='refill'
				 name='Energy Food'
				 price='$ 39.99'
			   />
            </div>
         </div>
        </div>
      </Sec>
  );
}

export default EcommBase01;