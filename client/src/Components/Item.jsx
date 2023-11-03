import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import notfound from '../assets/notfound.png'
const min = 750;

const PRODUCT = styled.div`
${
  innerWidth<min
  ?
  `
  width: calc(100vw - 140px);
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
margin: 9px 0px;
background-color: white; 
  `
  :
  `
  width: 170px;
height: 270px;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
margin: 9px 8px;
padding: 0 8px 4px  8px;
background-color: white;
  `
}

`

const ProductTitle = styled(Link)`
text-decoration:none;
color: black;
font-size: 16px;
font-family: 'Rubik', sans-serif;


`

const ProductImage = styled.div`

${
  innerWidth < min 
  ?
  `
  height: 70px;
    width: 100%;
    overflow: hidden;
    display: flex;
    padding-left:10px;

    img{
        height: 60px;
        width: 60px;
        object-fit: contain;
        transition: all 0.4s ease-in-out;
    }
  `
  :
  `
  height: 200px;
    width: 150px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    img{
        height: 150px;
        width: 100px;
        object-fit: contain;
        transition: all 0.4s ease-in-out;



        &:hover{
        transform: scale(1.2);
    }
    }
  `
}
    

   
`

const ProductPrice = styled.div`
    color: #8d8989;
`

const BUY = styled.button`
    padding: 6px 6px;
    height:fit-content;
    border-radius:15px;
    font-size: 12px;
    ${innerWidth < min &&
      `margin-right: 30px;`}
    border: none;
    color: white;
    background-color: #5700f9;
    cursor: pointer;
    font-family: 'Rubik', sans-serif;

    &:active{
        background-color: #3b04a2;

    }
    
`

const Productinfo = styled.div`
    display: flex;
    justify-content: space-between;


`

const Item = ({details}) => {
  return (
    <PRODUCT>
      {
        innerWidth<min 
        ? 
        <>
        <ProductImage>
        <img src={details.image !='[Image]' ? details.image : notfound} alt="" />
        <div>

       
        <ProductTitle to={'/about'} state={{item:details}} >{details.name}</ProductTitle>
        <ProductPrice>{details.price}</ProductPrice>
        </div>
        </ProductImage>
        <Productinfo>
          <div>
       
        </div>
        <BUY>Buy Now</BUY>
        </Productinfo>
        </>
        :
        <>
        <ProductImage>
        <img src={details.image !='[Image]' ? details.image : notfound} alt="" />
        </ProductImage>
        <Productinfo>
          <div>
        <ProductTitle to={'/about'} state={{item:details}} >{details.name}</ProductTitle>
        <ProductPrice>{details.price}</ProductPrice>
        </div>
        <BUY>Buy Now</BUY>
        </Productinfo>
        </>
      }
     
    </PRODUCT>
  )
}

export default Item
