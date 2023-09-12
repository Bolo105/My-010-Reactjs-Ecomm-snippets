import React from 'react'
import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';

const Imag = styled.img`
   width: 200px;
   @media screen and (max-width: 767px){
     display: inline;
     width: 100px;
   }
   @media screen and (max-width: 1025px){
    display: inline;
    width: 170px;
  }
`;
const  Ul = styled.ul`
   margin-left: -30px;
`;

function EcommComp02({title, text, price, imagen}) {
  return (
    <div>  
      <li className="list-group-item">
        <div className="media flex-column flex-lg-row p-3">
          <div className='row'>
            <div className='col-lg-8'>
          <div className="media-body order-2 order-lg-1">
            <h5 className="mt-0 font-weight-bold mb-2">{title}</h5>
            <p className="font-italic text-muted mb-0 small">
              {text}
            </p>
            <div className="d-flex justify-content-between mt-1">
              <h6 className="font-weight-bold my-2">{price}</h6>
              <Ul className="list-inline small">
                <li className="list-inline-item ml-0 mr-0">
                  <FaStar color='#22ab07'/>
                </li>
                <li className="list-inline-item ml-0 mr-0">
                  <FaStar color='#22ab07'/>
                </li>
                <li className="list-inline-item ml-0 mr-0">
                  <FaStar color='#22ab07'/>
                </li>
                <li className="list-inline-item ml-0 mr-0">
                  <FaStar color='#22ab07'/>
                </li>
                <li className="list-inline-item ml-0 mr-0">
                  <FaStar color='#22ab07'/>
                </li>
              </Ul>
            </div>
          </div>
          </div>
          <div className='col-lg-4'>
          <Imag
            src={require(`./images/${imagen}.jpg`)}
            alt="Generic placeholder"
          />
          </div>
        </div>
        </div>
      </li>
     
    </div>
  );
}

export default EcommComp02;