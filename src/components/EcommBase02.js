import React from 'react'
import EcommComp02 from './EcommComp02';
import styled from 'styled-components';

const Wrap = styled.div`
  background: #00b09b;
  background: -webkit-linear-gradient(to right, #a100b0, #3dc9b9);
  background: linear-gradient(to right, #a100b0, #3dc9b9);
  min-height: 100vh;
  margin-top: 70px;
`;


function EcommBase02() {
  return (
  <Wrap id='ecommcomp2' className="wrap">
    <div className="container py-5">
      <div className="row text-center text-white mb-5">
        <div className="col-lg-7 mx-auto">
          <h1 className="display-4">Product's Section</h1>
          <p className="lead mb-0">
          Here is a list of our products...
          </p>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-lg-8 mx-auto text-start">
          <ul className="list-group shadow">
            <EcommComp02 
            title='Shoes1' text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.' price='79.99' imagen='shoes1'
            />
            <EcommComp02 
            title='Shoes2' text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.' price='86.99' imagen='shoes2'
            />
            <EcommComp02 
            title='Shoes3' text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.' price='69.99' imagen='shoes3'
            />
            <EcommComp02 
            title='Shoes4' text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.' price='99.99' imagen='shoes4'
            />
          </ul>
        </div>
      </div>
    </div>
  </Wrap>
  );
}

export default EcommBase02;