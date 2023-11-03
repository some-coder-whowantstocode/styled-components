import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import notfound from '../assets/notfound.png'


const min = 750;

const Description = styled.div`
    position: absolute;
    ${innerWidth < min ?
     `
     width:100vw;
     height:100vh;
     padding:70px 10px;
     ` 
     : 
     `
     height: 500px;
     width:900px;
     padding:70px;
     `}

    background: linear-gradient(to right, #b9e7de 40%, white 40%);
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    box-sizing:border-box;
        
    display: flex;

`

const Goback = styled.div`
    position: fixed;
    top: 5px;
    left: 8px;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #80808062;
    cursor: pointer;
    color: #020202;
    font-weight: bolder;
`

const Destitle = styled.h1`
    ${innerWidth < min ?
    `
    font-size: 24px;
    `
    :
    `
    font-size: 50px;
    `

}
font-family: 'Rubik', sans-serif;

`

const Desprice = styled.div`
 ${innerWidth < min ?
    `
    font-size: 18px;
    `
    :
    `
    font-size: 24px;
    `

}
   
    font-family: 'Rubik', sans-serif;
    color: gray;
`

const Des = styled.div`
margin-top: 10px;
    span{
        font-size: 16px;
    font-family: 'Rubik', sans-serif;
    border-bottom: 2px solid #01f7c6 ;
    margin-right: 9px;
    cursor: pointer;

    &::before{
        content: "";
    position: absolute;
    left: 10%; 
    bottom: 0;
    
    word-wrap :break-word ;
    border-bottom: 2px solid #01f7c6 ;  

    }
    }
    p{
        margin-top: 4px;
        font-size: 14px;
        color: gray;
    }
`

const Desimg = styled.img`
${
  innerWidth < min ? `
    width:200px;
    height:200px;
  ` 
  :
  `
  width: 380px;
    height: 400px;
  ` 
}
  
    object-fit: contain;
`

const Productdecription = () => {

    const [item,setitem] = useState(null)

    const navigate = useNavigate()

    const location  = useLocation()

    useState(()=>{
        if(location.state)
        {
            setitem(location.state.item);
        }
    },[location])


  return (
    <>
        <Description>
            <Goback onClick={()=>navigate(-1)} >←</Goback>
            {
                item ?
                <>
                <div>
                <Destitle>{item.name}</Destitle>
                 <Desprice>${item.price}</Desprice>
                 <Des>
                    <div>

                    <span>Description</span>
                    </div>
                    <p>{item.description}</p>
                 </Des>
                </div>
                <div>
                    <Desimg src={item.image !='[Image]' ? item.image : notfound}/>
                </div>
                </>
                :
                <>
                
                </>
            }
        </Description>
    </>
  )
}

export default Productdecription
