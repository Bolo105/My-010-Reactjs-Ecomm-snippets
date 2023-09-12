import React from 'react'
import { products001 } from './Data'
import styled from 'styled-components'

const HeadC = styled.div`
   margin-bottom: 20px;
`;
const Box = styled.div`
  background-color: #fff;
  position: relative;
  padding: 10px;
  margin-top: 25px;
  border: 1px solid #eee;
`;
const A = styled.a`
  color: #000;
  text-decoration: none;
`;
const ImgB = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  padding: 15px 30px;
  height: 245px;
`;
const Imag = styled.img`
  max-width: 100%;
  max-height: 180px;
`;
const DetB = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
`;
const Spa1 = styled.div`
  color: #db4f66;
`;
const New = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #eee;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  border-radius: 100%;
  font-size: 15px;
`;
const BtnB = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 45px;
`;
const A1 = styled.a`
  text-decoration: none;
  display: inline-block;
  padding: 10px 40px;
  background-color: #f16179;
  color: #ffffff;
  border: 1px solid #f16179;
  border-radius: 5px;
  -webkit-transition: all .3s;
  transition: all .3s;
  &:hover {
    background-color: transparent;
    color: #f16179;
  }
`;

export const Products001 = () => {
  return (
 <section class="shop_section layout_padding py-5">
    <div class="container">
      <HeadC class="heading_container heading_center">
        <h2>
          Latest Products
        </h2>
      </HeadC>
      <div class="row">
       {products001.map((val) => (
        <div class="col-sm-6 col-md-6 col-lg-3">
          <Box class="box">
            <A href="/">
              <ImgB class="img-box">
                <Imag src={val.cover} alt="" />
              </ImgB>
              <DetB class="detail-box">
                <h6>{val.title1}</h6>
                <h6>{val.title2}<Spa1>{val.spa1}</Spa1></h6>
              </DetB>
              <New class="new">
                <span>{val.spa2}</span>
              </New>
            </A>
          </Box>
        </div>
        ))}
      </div>
      <BtnB class="btn-box">
        <A1 href="/">
          View All Products
        </A1>
      </BtnB>

    </div>
  </section>


  )
}
