import React, { useEffect, useRef, useState } from 'react'
import Item from './Item';
import styled from 'styled-components';
import {Products} from '../Items/products'
import { useNavigate, useParams } from 'react-router-dom';


const min = 750

const Productspage = styled.div`
    display: flex;
    min-height: 100vh;
`
const PRODUCTITEMS = styled.div`
   display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const Settings = styled.div`
${
  innerWidth < min 
  ?
`
width: 140px;
`
  :
`
width: 200px;
`
}
 
  min-height:100vh;
  background-color: #f8f2f2;
  span{
    margin: 20px;
  }
  input{
    margin: 20px;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 1px 2px;

    ${
      innerWidth<min ?`
    width:100px;

      `
      :
      `
    width:150px;
        
      `
    }

    &:focus{
      outline: none;
      border: none;
    }
  }
  div{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    button{
      cursor: pointer;
      padding: 4px 6px;
      background-color: #005eff;
      color: white;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      border: none;

      &:active{
        background-color: #6093eb;
      }
    }
  }

`

const Goback = styled.div`
    height: 50px;
    width: 100vw;
    display: flex;
    align-items: center;
    /* justify-content: center; */
    box-sizing: border-box;
    z-index: 100;
    padding-left: 10px;
    background: ${props=>props.col};
    cursor: pointer;
    color: #020202;
    font-weight: bolder;
    font-family: 'Rubik', sans-serif;
    position: fixed;
    top: 0;
    left: 0;

`


const Items = () => {

  const [items,setitems] = useState([])
  const [minprice,setminprice] = useState(0)
  const [maxprice,setmaxprice] = useState(1000000)
  const [colour,setcolor]  = useState('white')
  const [all,setall] = useState([]);

  const {type,color} = useParams();

  const navigate = useNavigate();


  useEffect(()=>{
   const product = Products.filter((p)=>p.category === type)

   setitems([...product])
   setall([...product])
   if(color) setcolor("#"+color);
  },[type,color])


  const set =()=>{
    const products  = all.filter((item)=> Number(item.price) > Number(minprice) && Number(item.price)< Number(maxprice))
    console.log(products)
    setitems(products)
  }


  return (
    <div
    style={{
      overflow:'hidden'
    }}>
        <Goback onClick={()=>navigate('/')} col={colour} >Menu</Goback>
        <div style={{
          height:"53px"
        }}></div>
        <Productspage >
          <Settings>
            <span>min price</span>
            <input defaultValue={minprice} onChange={(e)=>setminprice(e.target.value)} type="number" name="" id="" />
            <span>max price</span>
            <input defaultValue={maxprice} onChange={(e)=>setmaxprice(e.target.value)} type="number" />
            <div>
            <button onClick={()=>set()} >Apply</button>
            </div>
          </Settings>
          <PRODUCTITEMS>

          
          {
            items.map((item)=>(
              
              <Item key={item.name} details={item}/>
            ))
          }
          </PRODUCTITEMS>
        
      </Productspage>
    </div>
  )
}

export default Items
