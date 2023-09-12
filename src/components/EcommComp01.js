import React from 'react'
import styled from 'styled-components';

const Card01  = styled.div`
    &:hover {
    -webkit-box-shadow: 7px 8px 6px 0px #000000; 
    box-shadow: 7px 8px 6px 0px #000000;
    cursor: pointer;
    }
`;

function EcommComp01({imagen, name, price}) {
  return (
    <div>
       <Card01 className = "card border-0 bg-light mb-2">
         <div className = "card-body">
            <img className = "img-fluid i1" src={require(`./images/${imagen}.png`)} alt="" />
        </div>
       </Card01>
        <h6>{name}</h6>
        <p>{price}</p>
    </div>
  )
}

export default EcommComp01;