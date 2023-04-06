import styled from "styled-components"

const breakpoints=[768,1024]

export const md=breakpoints.map((bp)=>{
    return `@media screen and (max-width:${bp}px)`
})

export const Main=styled.main`
display:grid;
grid-template-columns:1fr;
align-items:center;
grid-gap:20px;
top:10vh;
position:relative;
padding:10px;
left:25vw;
width:50vw;
height:xxx;
border:1px solid white;
border-radius:5px;
${md[0]}{
left:5vw; 
width:90vw;
}
`
export const Button=styled.button`
display:grid;
grid-template-columns:1fr;
position:relative;
align-items:center;
left:10%;
width:80%;
color:white;
font-weight:700;
height:40px;
border:1px solid blue;
background:blue;
border-radius:5px;

`
export const Input=styled.input`
display:grid;
left:10%;
grid-template-columns:1fr;
position:relative;
width:80%;
height:40px;
border:1px solid slategrey;
border-radius:5px;
`
export const Alert=styled.p`
diplay:grid;
grid-template-columns:1fr;
position:relative;
left:10%;
width:80%;
height:40px;
color:red;
`
