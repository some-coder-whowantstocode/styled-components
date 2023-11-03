import React, { useEffect, useRef, useState } from 'react'
import styled,{keyframes,css} from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import cloths from '../assets/clothes.jpg'
import sports from '../assets/sports.jpg'
import food from '../assets/food.jpg'
import electronics from '../assets/electronics.jpg'


const min = 750;


const UL = styled.ul`
display:flex;
flex-direction: ${innerWidth < min ? "column" :'row'};
position:fixed;
width: 100vw;
height: 100vh;
overflow-x: hidden;
`


const StyledLink = styled(Link)`
text-decoration:none;
color:black;
font-family: 'Rubik', sans-serif;
cursor:pointer;
z-index:11;
display: flex;
padding: ${innerWidth < min ? "0 0" :'80px 10px'};
align-items: start;
justify-content: center;
font-size: 50px;
transition: all;
transition-duration: 0.2s;
font-weight: 900;
color: transparent;
background-image:url(${props=>props.img});
${innerWidth < min ?
`
  height:25vh;
  width:100vw;
`
:
`
height:100vh;
width:25vw;
padding-bottom:50px;
`}


 span{
  transition: all;
transition-duration: 0.2s;
color: white;
 ${
  innerWidth < min ? `
  `
  :
  `
  color:transparent;
 
  transform: rotate(90deg);
  `
 }
 
 }

&:hover{
  color: white;
  transition: all;
transition-duration: 0.2s;
  ${
    innerWidth > min && `width:45vw;`
  }
  

  span{
    transition: all;
transition-duration: 0.2s;
    ${
      innerWidth < min ? `
      ` 
      :
      `
     
      color:white;
  transform: rotate(0);
      `
    }
  
 }

}


`


const Nav = () => {

  const navigate = useNavigate();

    const navref = useRef(null);
    const backref = useRef(null);
    useEffect(()=>{
      if(navref.current && backref.current)
      {
        const {children} = navref.current;
        Array.from(children).map((child)=>{
          child.onclick = (e)=>{
            e.preventDefault();
            child.style = `
              width:100vw;
            `
           innerWidth < min && (navref.current.style =`
              background:${child.attributes.colour.value};
            `)
            Array.from(children).map((c)=>{
              if(c!= child){
                c.style =`
                  width:0px;
                `

                const animate = setTimeout(() => {
                  c.style =`
                  width:25%;
                `
                child.style =`
                  width:25%;
                `
            navigate(child.attributes.href.textContent)

                }, 200);
                return ()=>{
                  clearTimeout(animate)
                }
              }
            })

            console.log()
          }
        })
      }
    },[navref,backref])
 


   

  return (
    <div>
     
      <UL
      ref={navref}
      >
        <StyledLink to={`/products/foodItems/854d27`} img={food}  colour={'#854d27'} ><span>FOOD</span></StyledLink>
        <StyledLink to={`/products/electronics/074F57`}  img={electronics}  colour={'#074F57'} ><span>ELECTRONICS</span></StyledLink>
        <StyledLink to={`/products/clothes/F5E6E8`} img={cloths}  colour={'#F5E6E8'}><span>CLOTHES</span></StyledLink>
        <StyledLink to={`/products/sportsItems/FF4500`} img={sports}  colour={'#FF4500'}><span>SPORTS</span></StyledLink>
        
      </UL>
      <div ref={backref}></div>
    </div>
  )
}

export default Nav
