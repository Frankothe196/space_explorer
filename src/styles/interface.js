import styled from 'styled-components'

export const StyleDiv = styled.div`
    position: absolute;
    top: 25px;
    left: 125px;
    padding: 15px;
    height: 50vh;
    width: 65vw;
    z-index: 100;
    h1{
        font-family: "Poppins", sans-serif;
        font-size: 4rem;
        color: white;
    }
    p{
        font-family: "Poppins", sans-serif;
        color: white;
    }
    ul{
        font-family: "Poppins", sans-serif;
        color: white;
        margin: 30px;
    }
    button{
        border: none;
        background: blue;
        color: white;
        font-size: 1.3rem;
        padding: 10px 20px;
        border-radius: 15px; 
    }
`

export const WebGlApp = styled.div`
    position: fixed;
    z-index: 10;
`